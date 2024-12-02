import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly signupButton: Locator;
  readonly coursesNavLink: Locator;
  readonly homeNavLink: Locator;
  readonly shoppingCartIcon:Locator;
  readonly leftNav:Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.signupButton = page.getByRole('button', { name: 'Sign Up' });
    this.coursesNavLink = page.getByRole('link', { name: 'Courses', exact: true });
    this.homeNavLink = page.getByRole('link', { name: 'Home', exact: true });
    this.shoppingCartIcon = page.locator('[href="/cart"]');
    this.leftNav = page.getByRole('navigation');
  }

  async goto(url) {
    await this.page.goto(url);
  }
  
}