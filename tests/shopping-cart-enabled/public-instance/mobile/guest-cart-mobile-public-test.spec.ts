import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/loginPage';
import { LandingPage } from '../page-objects/landingPage';
import { CartPage } from '../page-objects/cartPage';
import { CoursePage } from '../page-objects/coursePage';
import { CoursePreviewPage } from '../page-objects/coursePreviewPage';
import { SignupPage } from '../page-objects/signupPage';

test('Public - Guest - Shopping Cart Enabled - Mobile', async ({ page }) => {

    const landingPage = new LandingPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const coursePage = new CoursePage(page);
    const coursePreviewPage = new CoursePreviewPage(page);

    var env = process.env.environment;

    await landingPage.goto(process.env.publicCartBaseUrl);

    //////////////////////////////
    //////  Guest Discovery  /////
    //////////////////////////////

    // Assert - landing page is matching
    await expect(page).toHaveScreenshot(env+'-landing-page.png');

    // Assert empty Shopping cart
    await landingPage.shoppingCartIcon.click();

    // Assert - empty shopping cart page is matching
    await expect(page).toHaveScreenshot(env+'-shopping-cart-empty-page.png');

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

    // Add course to shopping cart
    await coursePreviewPage.addToCartButton.click();

    // Assert - join a team page pop up is matching
    await expect(page).toHaveScreenshot(env+'-join-team-page.png');

    // Select solo study button
    await coursePreviewPage.studySoloButton.click();

    // Assert - join a team page pop up is matching
    await expect(page).toHaveScreenshot(env+'-course-added-preview-page.png');

    // Add multiple courses to cart
    await landingPage.coursesNavLink.click();
    if(env == "qa")
        {
            await coursePage.selectQACourseTwo();
            await coursePreviewPage.addToCartButton.click();
            await coursePreviewPage.studySoloButton.click();
        }  
    else if(env == "staging")
        {
            await coursePage.selectStagingCourseTwo();
            await coursePreviewPage.addToCartButton.click();
            await coursePreviewPage.studySoloButton.click();
        }
    await landingPage.coursesNavLink.click();

    if(env == "qa")
        {
            await coursePage.selectQACourseThree();
            await coursePreviewPage.addToCartButton.click();
            await coursePreviewPage.studySoloButton.click();
        }  
    else if(env == "staging")
        {
            await coursePage.selectStagingCourseThree();
            await coursePreviewPage.addToCartButton.click();
        }

    // Go Shopping cart Page
    await landingPage.shoppingCartIcon.click();
    await cartPage.proceedToCheckoutButton.scrollIntoViewIfNeeded();

    // Assert - shopping cart page is matching
    await expect(page).toHaveScreenshot(env+'-shopping-cart-item-page.png');

    // Checkout
    await cartPage.proceedToCheckoutButton.click();

    // Assert - login page is matching
    await expect(page).toHaveScreenshot(env+'-login-page.png');

    // Go to sign up page 
    await loginPage.signupTab.click();

    // Assert - signup page is matching
    await expect(page).toHaveScreenshot(env+'-signup-page.png');

/*
    ////////////////////
    //////  Login  /////
    ////////////////////

    // Login as learner.
    await loginPage.login("tpatrick+qa-waitlist-test9@noodle.com","Testing1");
*/
});