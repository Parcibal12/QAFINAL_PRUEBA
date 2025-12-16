import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import SwagShoppingPage from '../pageobjects/swag.shopping.page.js';

// Nota: Los steps de "I launch..." y "I login..." YA EXISTEN en swag.steps.js
// Cucumber es listo y los reutilizará. Solo definimos los nuevos:

When(/^I add two products to the cart$/, async () => {
    await SwagShoppingPage.addProducts();
});

When(/^I go to the cart$/, async () => {
    await SwagShoppingPage.goToCart();
});

When(/^I remove one product from the cart$/, async () => {
    await SwagShoppingPage.removeProduct();
});

When(/^I proceed to checkout with details "([^"]*)", "([^"]*)", "([^"]*)"$/, async (name, last, zip) => {
    await SwagShoppingPage.doCheckout(name, last, zip);
});

Then(/^I should see the order confirmation message$/, async () => {
    await expect(SwagShoppingPage.successMessage).toBeExisting();
});