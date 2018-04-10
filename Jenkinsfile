node ('docker-container') {
   stage 'Checkout'
   checkout scm
   
   stage 'Delete Existing Local Image'
   sh 'docker images'
   sh 'docker ps -a'
   
   try {		
        sh 'docker rmi -f fe-artifactoryha.de.bosch.com/docker-dev-local/presentation-octopus-deploy:0.0.1'
    }catch (e) { 
        echo 'Could not delete image fe-artifactoryha.de.bosch.com/docker-dev-local/presentation-octopus-deploy:0.0.1. Maybe was not existing?'
    }
   
   sh 'docker images'
   sh 'docker ps -a'
   
   stage 'Build Image'
   sh 'docker build --force-rm --no-cache --pull -t fe-artifactoryha.de.bosch.com/docker-dev-local/presentation-octopus-deploy:0.0.1 .'
   
   sh 'docker images'
   sh 'docker ps -a'
   
   stage 'Push image to Registry'   
   sh 'docker push fe-artifactoryha.de.bosch.com/docker-dev-local/presentation-octopus-deploy:0.0.1'

   try {		
        sh 'docker service rm presentation-octopus-deploy'
    }catch (e) { 
        echo 'Could not delete service presentation-octopus-deploy. Maybe was not existing?'
    }

   stage 'Deploy'
   sh 'docker service create --name presentation-octopus-deploy --publish 8025:80 fe-artifactoryha.de.bosch.com/docker-dev-local/presentation-octopus-deploy:0.0.1'
}