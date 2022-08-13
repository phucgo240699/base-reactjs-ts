pipeline {
  agent any
  stages {
      stage('Build') { 
          steps {
            sh 'docker-compose -f docker-compose-prod.yml up -d --build'
          }
      }
  }
}
