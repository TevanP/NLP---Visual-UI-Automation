import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly proceedToCheckoutButton:Locator;
  readonly deleteLink:Locator;
  readonly discoverCourseButton:Locator;
  readonly removeFromCartButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
    this.deleteLink = page.locator('a').getByText('Delete');
    this.discoverCourseButton = page.getByRole('button', { name: 'Discover courses' });
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove from cart' });
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
}