import { expect, Page } from '@playwright/test';
export class LoginPage {
  constructor(private page: Page) {}
  username = this.page.locator('[data-test="username"]');
  password = this.page.locator('[data-test="password"]');
  loginButton = this.page.locator('[data-test="login-button"]');
  error = this.page.locator('[data-test="error"]');
  async goto() { await this.page.goto('/'); }
  async login(username: string, password: string) {
    await this.username.fill(username); await this.password.fill(password); await this.loginButton.click();
  }
  async expectErrorContains(text: string) { await expect(this.error).toContainText(text); }
}
