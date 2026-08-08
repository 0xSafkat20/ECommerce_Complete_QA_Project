import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { user, password } from '../utils/auth';

test.describe('Authentication', () => {
  test('valid login @smoke', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.login(user(),password()); await new InventoryPage(page).expectLoaded(); });
  test('invalid password shows error', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.login(user(),'wrong_password'); await expect(l.error).toBeVisible(); });
  test('invalid username shows error', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.login('qa_invalid_user',password()); await expect(l.error).toBeVisible(); });
  test('blank username validation', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.password.fill(password()); await l.loginButton.click(); await l.expectErrorContains('Username is required'); });
  test('blank password validation', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.username.fill(user()); await l.loginButton.click(); await l.expectErrorContains('Password is required'); });
  test('locked out user is rejected', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.login('locked_out_user',password()); await expect(l.error).toContainText(/locked out/i); });
  test('logout returns to login', async ({ page }) => { const l=new LoginPage(page); await l.goto(); await l.login(user(),password()); const i=new InventoryPage(page); await i.logout(); await expect(page).toHaveURL(/saucedemo\.com\/?$/); });
});
