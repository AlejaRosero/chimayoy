pipeline {
    agent any // Ejecuta este pipeline en cualquier agente disponible

    stages {

        // Etapa 1: Instalación de dependencias
        stage('Build') {
            steps {
                // Ejecuta 'npm install' para instalar dependencias desde package.json
                sh 'npm install'
            }
        }

        // Etapa 2: Ejecución de pruebas
        stage('Test') {
            steps {
                // Ejecuta pruebas unitarias definidas en tu proyecto (npm test)
                sh 'npm test'
            }
        }

        // Etapa 3: Despliegue de la aplicación
        stage('Deploy') {
            steps {
                // Mensaje informativo
                echo 'Eliminando versión anterior...'

                // Borra los archivos del directorio donde se despliega la app (ajusta esta ruta)
                sh 'rm -rf /var/www/mi-aplicacion/*'

                // Mensaje informativo
                echo 'Copiando nueva versión...'

                // Copia el código actual al directorio de producción (ajusta según tu estructura)
                sh 'cp -r * /var/www/mi-aplicacion/'

                // Reinicia el servicio si tu aplicación tiene uno definido (opcional)
                echo 'Reiniciando servidor...'
                sh 'systemctl restart mi-aplicacion' // Solo si usas systemd. Puedes comentar si no aplica.
            }
        }
    }

    // Bloque post para acciones que se ejecutan siempre (éxito o fallo)
    post {
        always {
            echo 'Pipeline finalizada'
        }
    }
}
