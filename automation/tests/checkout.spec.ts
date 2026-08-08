import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { login } from '../utils/auth';

async function toCheckout(page:any){ const i=new InventoryPage(page); await i.addByName('Sauce Labs Backpack'); await i.openCart(); await new CartPage(page).startCheckout(); }
test.beforeEach(async ({ page }) => { await login(page); });
test.describe('Checkout', () => {
  test('valid customer info reaches overview @smoke', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','Doe','10001'); await expect(page).toHaveURL(/checkout-step-two/); });
  test('first name required', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('','Doe','10001'); await expect(c.error).toContainText('First Name is required'); });
  test('last name required', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','','10001'); await expect(c.error).toContainText('Last Name is required'); });
  test('postal code required', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','Doe',''); await expect(c.error).toContainText('Postal Code is required'); });
  test('final total equals item total plus tax', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','Doe','10001'); const item=CheckoutPage.amount(await c.itemTotal.innerText()); const tax=CheckoutPage.amount(await c.tax.innerText()); const total=CheckoutPage.amount(await c.total.innerText()); expect(Math.abs((item+tax)-total)).toBeLessThan(0.011); });
  test('finish order shows confirmation @smoke', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','Doe','10001'); await c.finishButton.click(); await c.expectComplete(); });
  test('back home returns to inventory', async ({ page }) => { await toCheckout(page); const c=new CheckoutPage(page); await c.fillInfo('Jane','Doe','10001'); await c.finishButton.click(); await c.backHome.click(); await expect(page).toHaveURL(/inventory/); });
});
