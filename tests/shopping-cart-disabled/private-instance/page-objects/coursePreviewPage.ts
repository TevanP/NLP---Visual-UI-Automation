import { expect, type Locator, type Page } from '@playwright/test';

export class CoursePreviewPage {
  readonly page: Page;
  readonly enrollNowButton:Locator;
  readonly enrollButton:Locator;
  readonly studySoloButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.enrollNowButton = page.getByRole('button', { name: 'Enroll Now' });
    this.enrollButton = page.getByRole('button', { name: 'Enroll' });
    this.studySoloButton = page.locator('div').getByText("Start Studying Solo");
    }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
}