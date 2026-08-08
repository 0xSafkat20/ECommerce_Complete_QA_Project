import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { login } from '../utils/auth';
const product='Sauce Labs Backpack';

test.beforeEach(async ({ page }) => { await login(page); });
test.describe('Shopping cart', () => {
  test('add one product updates badge @smoke', async ({ page }) => { const i=new InventoryPage(page); await i.addByName(product); await expect(i.cartBadge).toHaveText('1'); });
  test('added product appears in cart', async ({ page }) => { const i=new InventoryPage(page); await i.addByName(product); await i.openCart(); await new CartPage(page).expectItem(product); });
  test('remove product from cart', async ({ page }) => { const i=new InventoryPage(page); await i.addByName(product); await i.openCart(); const c=new CartPage(page); await c.remove(product); await expect(c.items).toHaveCount(0); });
  test('add two different products', async ({ page }) => { const i=new InventoryPage(page); await i.addByName('Sauce Labs Backpack'); await i.addByName('Sauce Labs Bike Light'); await expect(i.cartBadge).toHaveText('2'); });
  test('continue shopping preserves cart', async ({ page }) => { const i=new InventoryPage(page); await i.addByName(product); await i.openCart(); const c=new CartPage(page); await c.continueShopping.click(); await i.openCart(); await c.expectItem(product); });
  test('empty cart opens without item rows', async ({ page }) => { const i=new InventoryPage(page); await i.openCart(); await expect(new CartPage(page).items).toHaveCount(0); });
});
