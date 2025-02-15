pipeline {
    agent {
        label 'docker'  // Use an agent label where Docker is installed
    }
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:v1.50.1-noble').inside {
                        sh 'playwright test'
                    }
                }
            }
        }
    }
}

