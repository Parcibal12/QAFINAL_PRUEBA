import { join } from 'path';


export const config = {
    // 1. Dónde están tus pruebas (Features)
    specs: [
        './features/**/*.feature'
    ],
    
    // 2. Configuración del Runner
    runner: 'local',
    port: 4723, // Puerto por defecto de Appium
    
    // 3. Capacidades (¡AQUÍ CONECTAMOS CON TU AVD!)
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 7 (2)', // O el nombre de tu emulador
        'appium:platformVersion': '14.0',    // O la versión que tengas
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './SauceLabs (1).apk'), // <--- LA NUEVA APP
        'appium:appPackage': 'com.swaglabsmobileapp', // <--- PAQUETE CONFIRMADO
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity', 
        'appium:autoGrantPermissions': true
    }],

    // 4. Nivel de logs (para ver errores claros)
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // 5. Servicios (Inicia Appium automáticamente)
    services: ['appium'],

    // 6. Framework (Usamos Cucumber como en tu tarea)
    framework: 'cucumber',
    reporters: ['spec'], // Reporte simple en consola

    // 7. Configuración de Cucumber
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'], // Dónde buscar los pasos
        backtrace: false,
        dryRun: false,
        failFast: false,
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}