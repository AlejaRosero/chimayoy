pipeline {
    agent any // Ejecuta este pipeline en cualquier agente disponible

    stages {

        stage('Build') {
            steps {
                // Ejecuta npm install en Windows usando PowerShell
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Ejecuta pruebas unitarias usando npm test en Windows
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Eliminando versión anterior...'

                // Borra archivos en la carpeta de producción
                bat 'rmdir /s /q "C:\\inetpub\\Mi app jenkins"'
                bat 'mkdir "C:\\inetpub\\Mi app jenkins"'

                echo 'Copiando nueva versión...'

                // Copia todo el contenido del workspace a la carpeta de producción
                bat 'xcopy /E /I /Y * "C:\\inetpub\\Mi app jenkins\\"'

                echo 'Despliegue completado.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado'
        }
    }
}
