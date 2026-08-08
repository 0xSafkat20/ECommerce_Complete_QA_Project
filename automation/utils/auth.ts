import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
export const user = () => process.env.SAUCE_USERNAME || 'standard_user';
export const password = () => process.env.SAUCE_PASSWORD || 'secret_sauce';
export async function login(page: Page) { const lp = new LoginPage(page); await lp.goto(); await lp.login(user(), password()); }
