import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/loginPage';
import { LandingPage } from '../page-objects/landingPage';
import { CoursePage } from '../page-objects/coursePage';
import { CoursePreviewPage } from '../page-objects/coursePreviewPage';

test('Private - Guest - Shopping Cart Disabled - Tablet', async ({ page }) => {
    
    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);
    const coursePage = new CoursePage(page);
    const coursePreviewPage = new CoursePreviewPage(page);

    var env = process.env.environment;

    await landingPage.goto(process.env.privateBaseUrl);

    //////////////////////////////
    //////  Guest Discovery  /////
    //////////////////////////////

    // Assert - landing page is matching
    await expect(page).toHaveScreenshot(env+'-landing-page.png');

    // Go Courses Page
    await landingPage.coursesNavLink.click();
    
    // Assert - courses page is matching
    await expect(page).toHaveScreenshot(env+'-courses-page.png');

    // Collapse Courses list
    await coursePage.coursesDropdownButton.click();
    
    // Assert - courses page is matching
    await expect(page).toHaveScreenshot(env+'-collapsed-courses-page.png');

    // Expand Courses list
    await coursePage.coursesDropdownButton.click();

    // Go Courses Preview Page
    if(env == "qa")
        {
            await coursePage.selectQACourseOne();
        } 
    else if(env == "staging")
        {

            await coursePage.selectStagingCourseOne();
        }

    // Assert - courses preview page is matching
    await expect(page).toHaveScreenshot(env+'-course-preview-page.png');

    // Enroll now
    await coursePreviewPage.enrollNowButton.click();

    // Assert - login page is matching
    await expect(page).toHaveScreenshot(env+'-login-page.png');

});