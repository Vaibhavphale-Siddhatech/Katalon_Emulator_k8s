sh "pwd"
def pod = sh(returnStdout: true, script: "minikube kubectl -- get pods --no-headers -o custom-columns=':metadata.name'")
echo "pod name ${pod}"
def status
    	            
while(status != 'Running') {
   echo "Sleeping for 5 seconds..."
   sleep(5)
   status = sh(returnStdout: true, script: "minikube kubectl -- get pods ${pod} --no-headers -o custom-columns=':status.phase'")
   echo "status ${status}"
}
    	
sh "minikube kubectl -- port-forward ${pod} 5900:5900"
