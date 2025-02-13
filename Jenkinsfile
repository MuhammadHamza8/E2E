pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Run Playwright tests using Jest
                    sh 'npx jest --maxWorkers=2'
                }
            }
        }
    }

    post {
        always {
            // Clean up (e.g., delete screenshots or logs if necessary)
            echo 'Cleaning up after tests.'
        }
    }
}
