pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh "docker build -t=blitzstriker/playwright:latest ."
            }
        }

        stage('Push Image') {
            environment {
                DOCKER_HUB = credentials('dockerhub-creds')
            }
            steps {
                sh 'echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin'
                sh "docker push blitzstriker/playwright:latest"
                sh "docker tag blitzstriker/playwright:latest blitzstriker/playwright:${env.BUILD_NUMBER}"
                sh "docker push blitzstriker/playwright:${env.BUILD_NUMBER}"
            }
        }
    }

    post {
        always {
            sh "docker logout"
        }
    }
}