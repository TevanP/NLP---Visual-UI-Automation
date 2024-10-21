import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly email:Locator;
  readonly password:Locator;
  readonly loginTab:Locator;
  readonly signupTab:Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginTab = page.getByRole('list').getByText('Log In')
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.email = page.getByPlaceholder('Email Address*');
    this.password = page.getByPlaceholder('Password*');
    this.signupTab = page.getByRole('link', { name: 'Sign Up' });
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  async login(username, password) {
    await this.email.click();
    await this.email.fill(username);
    await this.password.click();
    await this.password.fill(password);
    await this.loginButton.click();
  }
}