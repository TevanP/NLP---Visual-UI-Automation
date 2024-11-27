import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstLastName:Locator;
  readonly address:Locator;
  readonly reviewAndPayButton:Locator;
  readonly addressSuggestion:Locator;

  constructor(page: Page) {
    this.page = page;
    this.reviewAndPayButton = page.getByRole('button', { name: 'Review and Pay' });
    this.firstLastName = page.locator('#Field-nameInput');
    this.address = page.locator('#Field-addressLine1Input');
    this.addressSuggestion = page.locator('iframe[name="__privateStripeFrame34418"]').contentFrame().getByLabel('Main Street, Brooklyn, NY, USA');
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }

  async enterFirstLastName() {
    await this.firstLastName.fill('Visual Automation Test');
  }

  async enterAddress() {
    await this.address.fill('1 main street');
    await this.addressSuggestion.click();
  }
  
}