import { expect, Page } from '@playwright/test';
export class CartPage {
  constructor(private page: Page) {}
  items = this.page.locator('.cart_item');
  checkout = this.page.locator('[data-test="checkout"]');
  continueShopping = this.page.locator('[data-test="continue-shopping"]');
  async expectItem(name: string) { await expect(this.items.filter({ hasText: name })).toBeVisible(); }
  async remove(name: string) { await this.items.filter({ hasText: name }).getByRole('button', { name: /remove/i }).click(); }
  async startCheckout() { await this.checkout.click(); }
}
