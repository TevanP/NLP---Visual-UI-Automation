import { expect, type Locator, type Page } from '@playwright/test';

export class CoursePreviewPage {
  readonly page: Page;
  readonly enrollNowButton:Locator;
  readonly studySoloButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.enrollNowButton = page.getByRole('button', { name: 'Enroll Now' });
    this.studySoloButton = page.getByRole('button', { name: 'Start Studying Solo' });
    }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
}