#!/bin/bash

# Run a command to get the current working directory
current_dir=$(pwd)
echo "Current directory: ${current_dir}"

# Run a command to get the list of pods
pod=$(minikube kubectl -- get pods --no-headers -o custom-columns=':metadata.name')
echo "Pod name: ${pod}"

# Initialize status variable
status=""

# Loop until the status is 'Running'
while [ "$status" != "Running" ]; do
    echo "Sleeping for 5 seconds..."
    sleep 5

    # Get the status of the pod
    status=$(minikube kubectl -- get pods ${pod} --no-headers -o custom-columns=':status.phase')
    echo "Status: ${status}"
done

# Port forward using kubectl
minikube kubectl -- port-forward ${pod} 5900:5900 > port_forward.log 2>&1 &
