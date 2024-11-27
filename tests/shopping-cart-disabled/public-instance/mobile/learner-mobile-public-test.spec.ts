import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/loginPage';
import { LandingPage } from '../page-objects/landingPage';
import { CoursePage } from '../page-objects/coursePage';
import { CoursePreviewPage } from '../page-objects/coursePreviewPage';
import { CheckoutPage } from '../page-objects/checkoutPage';
import { SignupPage } from '../page-objects/signupPage';

test('Public - Learner - Shopping Cart Disabled - Mobile', async ({ page }) => {
    
    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);
    const coursePage = new CoursePage(page);
    const coursePreviewPage = new CoursePreviewPage(page);
    const checkoutPage = new CheckoutPage(page);
    const signupPage = new SignupPage(page);

    var env = process.env.environment;
    var publicLearnerUsername = process.env.publicLearnerUsername;
    var publicLearnerPassword = process.env.publicLearnerPassword;

    await landingPage.goto(process.env.publicBaseUrl);

    // Go to login page.
    await landingPage.signupButton.click();

    // Assert - signup page is matching
    await expect(page).toHaveScreenshot(env+'-signup-page.png');

    await signupPage.loginTab.click();

    // Assert - login page is matching
    await expect(page).toHaveScreenshot(env+'-login-page.png');

    // Login as learner
    await loginPage.login(publicLearnerUsername,publicLearnerPassword);
    
    // Assert - home page is matching
    await expect(page).toHaveScreenshot(env+'-home-page.png');

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

    // Enroll
    await coursePreviewPage.enrollNowButton.click();
    await coursePreviewPage.enrollButton.click();

    // Assert - join a team page pop up is matching
    await expect(page).toHaveScreenshot(env+'-join-team-page.png');

    // Select solo study button
    await coursePreviewPage.studySoloButton.click();

    // Assert - join a team page pop up is matching
    await expect(page).toHaveScreenshot(env+'-course-added-preview-page.png');

    // Assert - checkout billing information page is matching
    await expect(page).toHaveScreenshot(env+'-billing-information-page.png');

    // Fill in billing information
    /*await checkoutPage.enterFirstLastName();
    await checkoutPage.enterAddress();*/
    await checkoutPage.reviewAndPayButton.scrollIntoViewIfNeeded();
    await checkoutPage.reviewAndPayButton.click();

    // Assert - checkout payment information page is matching
    await expect(page).toHaveScreenshot(env+'-payment-information-page.png');

});