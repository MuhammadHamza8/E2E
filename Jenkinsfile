pipeline {
    agent any  // Runs on any available Jenkins node

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'  // Install dependencies
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'  // Run Playwright tests
            }
        }
    }

    post {
        always {
            junit '**/test-results/**/*.xml'  // Store test results
        }
    }
}


