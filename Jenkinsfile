pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Ensure you have configured this in "Global Tool Configuration"
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = './.cache/ms-playwright' // Optional: Cache Playwright browsers
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MuhammadHamza8/E2E.git/' // Update your repo
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=dot'
            }
        }

        stage('Archive Test Results') {
            steps {
                junit '**/test-results/**/*.xml'
                archiveArtifacts artifacts: '**/test-results/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Playwright tests passed!'
        }
        failure {
            echo 'Playwright tests failed!'
        }
    }
}
