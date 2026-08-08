import { expect, Page } from '@playwright/test';
export class InventoryPage {
  constructor(private page: Page) {}
  items = this.page.locator('.inventory_item');
  itemNames = this.page.locator('.inventory_item_name');
  itemPrices = this.page.locator('.inventory_item_price');
  sort = this.page.locator('[data-test="product-sort-container"]');
  cartLink = this.page.locator('.shopping_cart_link');
  cartBadge = this.page.locator('.shopping_cart_badge');
  menuButton = this.page.locator('#react-burger-menu-btn');
  logoutLink = this.page.locator('#logout_sidebar_link');
  async expectLoaded() { await expect(this.page).toHaveURL(/inventory/); await expect(this.items.first()).toBeVisible(); }
  async addByName(name: string) {
    const item = this.items.filter({ hasText: name }); await item.getByRole('button', { name: /add to cart/i }).click();
  }
  async removeByName(name: string) {
    const item = this.items.filter({ hasText: name }); await item.getByRole('button', { name: /remove/i }).click();
  }
  async openCart() { await this.cartLink.click(); }
  async logout() { await this.menuButton.click(); await this.logoutLink.click(); }
  async names() { return (await this.itemNames.allTextContents()).map(x => x.trim()); }
  async prices() { return (await this.itemPrices.allTextContents()).map(x => Number(x.replace('$',''))); }
}
