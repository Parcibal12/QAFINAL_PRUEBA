import { $ } from '@wdio/globals';
import Page from './page.js';

class SwagLoginPage extends Page {
    // --- ELEMENTOS (Selectores) ---
    // Usamos ~ para accessibility id, que en esta app se llaman "test-Algo"
    get inputUser() { return $('~test-Username'); }
    get inputPass() { return $('~test-Password'); }
    get btnLogin() { return $('~test-LOGIN'); }
    
    // Elementos del Menú para Logout
    get menuButton() { return $('~test-Menu'); }
    get logoutLink() { return $('~test-LOGOUT'); }

    // --- ACCIONES ---
    
    // Función para iniciar sesión
    async login(user, pass) {
        // Esperamos a que el input sea visible por si la app tarda en cargar
        await this.inputUser.waitForDisplayed({ timeout: 5000 });
        await this.inputUser.setValue(user);
        await this.inputPass.setValue(pass);
        await this.btnLogin.click();
    }

    // Función para cerrar sesión (Flujo: Clic Menu -> Esperar -> Clic Logout)
    async logout() {
        await this.menuButton.waitForDisplayed();
        await this.menuButton.click();
        
        // A veces el menú tarda un segundo en deslizarse
        await this.logoutLink.waitForDisplayed({ timeout: 3000 });
        await this.logoutLink.click();
    }
}

export default new SwagLoginPage();