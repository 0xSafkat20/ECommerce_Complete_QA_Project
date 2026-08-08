import { expect, Page } from '@playwright/test';
export class CheckoutPage {
  constructor(private page: Page) {}
  firstName = this.page.locator('[data-test="firstName"]');
  lastName = this.page.locator('[data-test="lastName"]');
  postalCode = this.page.locator('[data-test="postalCode"]');
  continueButton = this.page.locator('[data-test="continue"]');
  finishButton = this.page.locator('[data-test="finish"]');
  cancelButton = this.page.locator('[data-test="cancel"]');
  error = this.page.locator('[data-test="error"]');
  itemTotal = this.page.locator('.summary_subtotal_label');
  tax = this.page.locator('.summary_tax_label');
  total = this.page.locator('.summary_total_label');
  completeHeader = this.page.locator('[data-test="complete-header"]');
  backHome = this.page.locator('[data-test="back-to-products"]');
  async fillInfo(first: string, last: string, postal: string) {
    await this.firstName.fill(first); await this.lastName.fill(last); await this.postalCode.fill(postal); await this.continueButton.click();
  }
  static amount(text: string) { const n = text.match(/\$([0-9.]+)/); if (!n) throw new Error(`No amount in: ${text}`); return Number(n[1]); }
  async expectComplete() { await expect(this.completeHeader).toContainText(/thank you/i); }
}
