pipeline {
    agent any  // Runs on any available Jenkins agent
    
    environment {
        NODE_VERSION = '18'  // Adjust based on your required Node.js version
    }
    
    stages {
        stage('Setup') {
            steps {
                script {
                    // Install Node.js if not already installed
                    //sh 'node -v || curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && sudo apt-get install -y nodejs'

                    // Install dependencies
                    sh 'npm install' 
                }
            }
        }

        stage('Install Playwright') {
            steps {
                script {
                    sh 'npx playwright install --with-deps'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**/*', allowEmptyArchive: true
            junit '**/test-results/**/*.xml'  // Store test results in Jenkins
        }
        failure {
            echo 'Tests failed! Check the logs above.'
        }
        success {
            echo 'All Playwright tests passed successfully!'
        }
    }
}


