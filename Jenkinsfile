pipeline {

  environment {
    HOME = "${env.WORKSPACE}"
    dockerimagename = "vaibhavx7/android-emulator"
    dockerImage = ""
  }

  agent any

  stages {

    stage('SCM Checkout') {
      steps{
        script {
	  git branch: 'main', credentialsId: 'Github_cred_siddhatech', url: 'https://github.com/Vaibhavphale-Siddhatech/Katalon_Emulator_k8s.git'
        }
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build(dockerimagename, "-f ${env.WORKSPACE}/Dockerfile_Android .")
        }
      }
    }

    stage('Pushing Images') {
      environment {
            registryCredential = 'Docker_Hub_cred'
      }
      steps{
        script {
            docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying katalon and android emulator container to Kubernetes') {
      steps {
        script {
		sh "pwd"
	        withCredentials([file(credentialsId: 'Kubeconfig_file', variable: 'KUBECONFIG')]) {
    	        sh '''minikube kubectl -- apply -f deployment.yaml'''
		sh '''minikube kubectl -- apply -f android-service.yaml'''
                sh '''minikube kubectl -- apply -f vnc-service.yaml'''
          }
        }
      }
    }
	
     stage('VNC Port Forwarding') {
        steps {
		script {
                    def sudoCommand = 'sudo -u siddhatech ./portforward_vnc.sh'
                    sh """
		    	chmod 777 portforward_vnc.sh
                        export SUDO_ASKPASS=/usr/bin/ssh-askpass
			sudo -A ${sudoCommand}
                    """
		}
        }
     }
  }

}
