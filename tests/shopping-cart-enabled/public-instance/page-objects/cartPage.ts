import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly proceedToCheckoutButton:Locator;
  readonly deleteLink:Locator;
  readonly discoverCourseButton:Locator;
  readonly removeFromCartButton:Locator;
  readonly addDonationButton:Locator;
  readonly closeDonationsModalButton:Locator;
  readonly cartTableItems:Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
    this.deleteLink = page.locator('a').getByText('Delete');
    this.discoverCourseButton = page.getByRole('button', { name: 'Discover courses' });
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove from cart' });
    this.addDonationButton = page.getByText('Add Donation');
    this.closeDonationsModalButton = page.getByRole('button', { name: 'close' });
    this.cartTableItems = page.locator('table').locator('th');
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }

}