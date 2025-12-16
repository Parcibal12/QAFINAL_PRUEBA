import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import SwagLoginPage from '../pageobjects/swag.login.page.js';

// 1. Abrir la App
Given(/^I launch the SwagLabs app$/, async () => {
    // WebdriverIO abre la app automáticamente, pero podemos esperar a que cargue el input
    await SwagLoginPage.inputUser.waitForDisplayed();
});

// 2. Hacer Login
When(/^I login with standard user "([^"]*)" and password "([^"]*)"$/, async (user, pass) => {
    await SwagLoginPage.login(user, pass);
});

// 3. Validar que entramos (Buscamos el texto "PRODUCTS" o el icono del carrito)
Then(/^I should see the home page$/, async () => {
    // El título "PRODUCTS" suele ser un buen indicador
    const title = await $('//android.widget.TextView[@text="PRODUCTS"]'); 
    // OJO: Si falla el selector de arriba, usaremos uno más genérico en el siguiente paso
    await expect(title).toBeExisting();
});

// 4. Hacer Logout
When(/^I log out from the application$/, async () => {
    await SwagLoginPage.logout();
});

// 5. Validar que salimos (Vemos el botón de Login otra vez)
Then(/^I should see the login screen again$/, async () => {
    await expect(SwagLoginPage.btnLogin).toBeExisting();
});