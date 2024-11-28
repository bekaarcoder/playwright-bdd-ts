pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh "docker build -t=blitzstriker/playwright ."
            }
        }

        stage('Push Image') {
            steps {
                sh "docker push blitzstriker/playwright"
            }
        }
    }
}