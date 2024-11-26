pipeline {
    agent {
        docker  {
            image 'mcr.microsoft.com/playwright:v1.49.0-noble'
        }
    }
    stages {
        stage('e2e-tests') {
            steps {
                sh 'npm ci'
                sh 'npm run cucumber login'
            }
        }
    }
}