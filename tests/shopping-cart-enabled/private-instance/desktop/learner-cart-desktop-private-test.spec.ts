import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/loginPage';
import { LandingPage } from '../page-objects/landingPage';
import { CartPage } from '../page-objects/cartPage';
import { CoursePage } from '../page-objects/coursePage';
import { CoursePreviewPage } from '../page-objects/coursePreviewPage';
import { CheckoutPage } from '../page-objects/checkoutPage';

test('Private - Learner - Shopping Cart Enabled - Desktop', async ({ page }) => {
    
    const landingPage = new LandingPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const coursePage = new CoursePage(page);
    const coursePreviewPage = new CoursePreviewPage(page);
    const checkoutPage = new CheckoutPage(page);

    var env = process.env.environment;
    var privateLearnerUsername = process.env.privateLearnerUsername;
    var privateLearnerPassword = process.env.privateLearnerPassword;

    await landingPage.goto(process.env.privateCartBaseUrl);

    // Go to login page.
    await landingPage.loginButton.click();

    // Assert - login page is matching
    await expect(page).toHaveScreenshot(env+'-login-page.png');

    // Login as learner
    await loginPage.login(privateLearnerUsername,privateLearnerPassword);
    
    // Assert - home page is matching
    await expect(page).toHaveScreenshot(env+'-home-page.png');

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

    // Assert - shopping cart page is matching
    await expect(page).toHaveScreenshot(env+'-shopping-cart-item-page.png');

    // Open donations popup modal
    await cartPage.addDonationButton.first().click();

    // Assert - donation pop up is matching
    await expect(page).toHaveScreenshot(env+'-donations-popup-page.png');

    // Close donation modal
    await cartPage.closeDonationsModalButton.click();

    // Checkout
    await cartPage.proceedToCheckoutButton.click();

    // Assert - checkout billing information page is matching
    await expect(page).toHaveScreenshot(env+'-billing-information-page.png');

    // Fill in billing information
   /* await checkoutPage.enterFirstLastName();
    await checkoutPage.enterAddress();*/
    await checkoutPage.reviewAndPayButton.click();

    // Assert - checkout payment information page is matching
    await expect(page).toHaveScreenshot(env+'-payment-information-page.png');

    // Go Shopping cart Page
    await landingPage.shoppingCartIcon.click();

    // Delete items in cart
    await cartPage.cartTableItems.locator(cartPage.deleteLink).first().click();
    await cartPage.cartTableItems.locator(cartPage.deleteLink).nth(1).click();
    await cartPage.cartTableItems.locator(cartPage.deleteLink).last().click();

});