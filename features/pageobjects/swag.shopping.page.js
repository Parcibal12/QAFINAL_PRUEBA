import { $ } from '@wdio/globals';
import Page from './page.js';

class SwagShoppingPage extends Page {
    // --- SELECTORES ---
    
    get btnAddProduct1() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); }
    get cartIcon() { return $('~test-Cart'); }
    
    // NUEVO: El título de la página del carrito (Siempre visible arriba)
    get cartPageTitle() { return $('//android.widget.TextView[@text="YOUR CART"]'); }

    // El botón REMOVE (Busca el texto)
    get btnRemove() { return $('//android.widget.TextView[@text="REMOVE"]'); }
    
    get btnCheckout() { return $('~test-CHECKOUT'); }
    
    get inputName() { return $('~test-First Name'); }
    get inputLastName() { return $('~test-Last Name'); }
    get inputZip() { return $('~test-Zip/Postal Code'); }
    get btnContinue() { return $('~test-CONTINUE'); }
    get btnFinish() { return $('~test-FINISH'); }
    
    get successMessage() { return $('//android.widget.TextView[@text="CHECKOUT: COMPLETE!"]'); }

    // --- ACCIONES ---

    async addProducts() {
        await this.btnAddProduct1.click();
        // Scroll y click al segundo
        const btn2 = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-ADD TO CART").instance(1))');
        await btn2.click();
    }

    async goToCart() {
        await browser.pause(1000); // Pequeño respiro
        await this.cartIcon.click();
        
        // CORRECCIÓN CRÍTICA:
        // No esperamos al botón de Checkout (que puede estar escondido abajo).
        // Esperamos a que aparezca el TÍTULO "YOUR CART" arriba.
        await this.cartPageTitle.waitForDisplayed({ timeout: 10000 });
    }

    async removeProduct() {
        // El primer botón REMOVE suele verse, pero por seguridad esperamos
        await this.btnRemove.waitForDisplayed({ timeout: 5000 });
        await this.btnRemove.click();
    }

    async doCheckout(name, last, zip) {
        // CORRECCIÓN: Hacemos Scroll hasta encontrar el botón CHECKOUT antes de clicarlo
        // porque con 2 productos puede quedar fuera de pantalla.
        const btnCheckoutVisible = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))');
        await btnCheckoutVisible.click();

        await this.inputName.setValue(name);
        await this.inputLastName.setValue(last);
        await this.inputZip.setValue(zip);
        await this.btnContinue.click();
        
        // Scroll para encontrar el botón FINISH
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))');
        await this.btnFinish.click();
    }
}

export default new SwagShoppingPage();