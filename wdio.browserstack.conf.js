import 'dotenv/config'

export const config = {
    // Credenciales de BrowserStack (leídas desde tu archivo .env)
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    // Dónde están tus pruebas
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],

    maxInstances: 1,

    // Capacidades (El celular en la nube)
// ... (dentro de config) ...
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.APP, // Usará el bs:// nuevo del .env
        // DATOS DE LA NUEVA APP (SWAGLABS) 👇
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
        'bstack:options': {
            "projectName": "Examen Final QA",
            "buildName": "Intento Final Jenkins",
            "sessionName": "Flujo de Compra Completo",
            "debug": "true",
            "networkLogs": "true"
        }
    }],
    // ... (resto del archivo) ...

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Servicio específico de BrowserStack
    services: ['browserstack'],

    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}