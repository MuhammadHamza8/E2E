pipeline {
    agent any

    environment {
        NODE_VERSION = '18' // Adjust as needed
    }

    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/your-repo.git' // Change to your repo
        //     }
        // }

        stage('Setup Node.js') {
            steps {
                script {
                    def nodeExists = sh(script: 'command -v node', returnStatus: true) == 0
                    if (!nodeExists) {
                        error("Node.js is not installed. Install it manually or use a Node.js Docker agent.")
                    }
                }
                sh 'node -v' // Check Node version
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
                sh 'npx playwright test --reporter=dot' // Change reporter if needed
            }
        }

        stage('Archive Test Results') {
            steps {
                junit '**/test-results/**/*.xml' // Adjust the path if using JUnit XML
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


