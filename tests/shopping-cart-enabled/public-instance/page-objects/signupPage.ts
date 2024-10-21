import { expect, type Locator, type Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupButton: Locator;
  readonly email: Locator;
  readonly loginTab:Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupButton = page.getByRole('button', { name: 'Sign Up' });
    this.email = page.getByPlaceholder('Email Address*');
    this.loginTab = page.getByRole('link', { name: 'Log In' });
  }

}