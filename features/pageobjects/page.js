import { browser } from '@wdio/globals';

/**
* Clase principal de la que heredan todas las páginas (Page Objects)
*/
export default class Page {
    /**
    * Abre una sub-página de la URL (si fuera web)
    * @param path ruta de la sub-página (ej. /login)
    */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}