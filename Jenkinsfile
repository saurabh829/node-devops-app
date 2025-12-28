pipeline {
  agent any

  environment {
    REGISTRY = "us-central1-docker.pkg.dev/avian-silo-477711-h9/node-devops-repo"
    IMAGE = "node-devops-app"
    TAG = "${env.GIT_COMMIT}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        sh '''
          docker build -t $REGISTRY/$IMAGE:$TAG .
        '''
      }
    }

    stage('Push Image') {
      steps {
        sh '''
          docker push $REGISTRY/$IMAGE:$TAG
        '''
      }
    }
  }
}
