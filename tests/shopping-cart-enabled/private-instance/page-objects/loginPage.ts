import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly email:Locator;
  readonly password:Locator;
  readonly loginTab:Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginTab = page.getByRole('list').getByText('Log In')
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.email = page.getByPlaceholder('Email Address*');
    this.password = page.getByPlaceholder('Password*');
  }

  async goto(url) {
    await this.page.goto(url);
  }
  async login(username, password) {
    await this.email.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}