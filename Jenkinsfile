pipeline {
    agent any

    environment {
        DEPLOY_DIR = "C:\\inetpub\\Mi app jenkins"
    }

    options {
        timestamps()
    }

    stages {

        stage('Instalación de dependencias') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm ci'
            }
        }

        stage('Verificación de buenas prácticas') {
            steps {
                echo 'Analizando calidad del código...'
                
                bat 'npx eslint .'
                
                echo 'Revisando vulnerabilidades...'
                bat 'npm audit --audit-level=high'
            }
        }

        stage('Pruebas') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                bat 'npm test'
            }
        }

        stage('Despliegue') {
            steps {
                echo "Eliminando versión anterior en ${env.DEPLOY_DIR}..."
                bat "if exist \"${env.DEPLOY_DIR}\" rmdir /s /q \"${env.DEPLOY_DIR}\""
                bat "mkdir \"${env.DEPLOY_DIR}\""

                echo 'Copiando nueva versión...'
                bat "xcopy /E /I /Y * \"${env.DEPLOY_DIR}\\\""

                echo 'Despliegue completado exitosamente.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'Error durante la ejecución del pipeline. Verifique los logs.'
        }
    }
}
