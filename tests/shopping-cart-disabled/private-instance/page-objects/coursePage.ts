import { expect, type Locator, type Page } from '@playwright/test';

export class CoursePage {
  readonly page: Page;
  readonly courseCardQA:Locator;
  readonly courseCardStaging:Locator;
  readonly pageHeading:Locator;
  readonly coursesDropdownButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.courseCardQA = page.getByRole('link', { name: 'Pici University Buffalo Burger Area Manager 323 Course' });
    this.courseCardStaging = page.getByRole('link', { name: 'Pici University Buffalo Burger Area Manager 323 Course' });
    this.pageHeading = page.getByRole('heading', { name: 'Courses', exact: true });
    this.coursesDropdownButton = page.getByRole('button', { name: 'Courses Available' });
    }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
  async selectQACourseOne() {
    await this.courseCardQA.click();
  }

  async selectStagingCourseOne() {
    await this.courseCardStaging.click();
  }

}