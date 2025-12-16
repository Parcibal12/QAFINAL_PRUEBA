pipeline {
    agent any

    stages {
        stage('Configurar Entorno .env') {
            steps {
                script {
                    // Creamos el archivo .env dinámicamente porque no está en GitHub
                    // Usamos 'bat' porque estás en Windows
                    bat 'echo BROWSERSTACK_USERNAME=trickfinger_m51tBd > .env'
                    bat 'echo BROWSERSTACK_ACCESS_KEY=8mrCjsPJyyugL3pj1RUs >> .env'
                    bat 'echo APP=bs://6d0b17ebe00e9cb138d5b3e5df96bd73d8598c2b >> .env'
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                // Instala los node_modules
                bat 'npm install'
            }
        }

        stage('Ejecutar Tests en BrowserStack') {
            steps {
                // Corre el comando de WebdriverIO
                bat 'npx wdio run wdio.browserstack.conf.js --spec features/swag_shopping.feature'
            }
        }
    }
}