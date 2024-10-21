import { expect, type Locator, type Page } from '@playwright/test';

export class CoursePage {
  readonly page: Page;
  readonly courseCardQA:Locator;
  readonly courseCardTwoQA:Locator;
  readonly courseCardThreeQA:Locator;
  readonly courseCardStaging:Locator;
  readonly courseCardTwoStaging:Locator;
  readonly courseCardThreeStaging:Locator;
  readonly pageHeading:Locator;
  readonly coursesDropdownButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.courseCardQA = page.getByRole('link', { name: 'Linguine Law School Law' });
    this.courseCardTwoQA = page.getByRole('link', { name: 'Linguine Law School Taco' });
    this.courseCardThreeQA = page.getByRole('link', { name: 'Linguine Law School Corporate Law Course' });
    this.courseCardStaging = page.getByRole('link', { name: 'Linguine Law School Tortellini Torts: A Flavorful Exploration of Civil Wrongs' });
    this.courseCardTwoStaging = page.getByRole('link', { name: 'Linguine Law School Spaghetti' });
    this.courseCardThreeStaging = page.getByRole('link', { name: 'Linguine Law School Digital' });
    this.pageHeading = page.getByRole('heading', { name: 'Courses', exact: true });
    this.coursesDropdownButton = page.getByRole('button', { name: 'Courses Available' });
    }

  async goto(baseUrl) {
    await this.page.goto(baseUrl);
  }
  
  async selectQACourseOne() {
    await this.courseCardQA.click();
  }

  async selectQACourseTwo() {
    await this.courseCardTwoQA.click();
  }

  async selectQACourseThree() {
    await this.courseCardThreeQA.click();
  }

  async selectStagingCourseOne() {
    await this.courseCardStaging.click();
  }

  async selectStagingCourseTwo() {
    await this.courseCardTwoStaging.click();
  }

  async selectStagingCourseThree() {
    await this.courseCardThreeStaging.click();
  }
}