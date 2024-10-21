import { expect, type Locator, type Page } from '@playwright/test';

export class CoursePreviewPage {
  readonly page: Page;
  readonly addToCartButton:Locator;
  readonly removeFromCartButton:Locator;
  readonly studySoloButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByLabel('Add Course to Cart');
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove from Cart' });
    this.studySoloButton = page.getByRole('button', { name: 'Start Studying Solo' });
    }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
}