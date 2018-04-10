
## Requirements
- Multiple security zones (no connection from BCN allowed)
- On premise/in cloud
- Automated releases/deployment easy
- Easy integration in CI/CD pipelines
- Reliable
- Secure, auditable

---

## Architecture
![orchestration-1](images/octoppus-everything.png)

--
## Key components
- Octopus Deploy servers
- Agents: Tentacle, Calamari

![orchestration-1](images/octopus-deploy-tentacle.png)
![orchestration-1](images/octopus-deploy-calamari.png)

--
## Key concepts
### Where to deploy
- Environment
- Machine
- Role

--
<img src="images/octopus-deploy-environment.png" height="600"/>

--
## Key concepts
### How to deploy
- Projects
- Deployment process
- Lifecycle
- Variables
- Channels

--
![orchestration-1](images/octopus-deploy-project.png)

--
## Key concepts
- Release
- Deployment

---
## Octopus deploy in CI/BD

--
## Security Architecture
- Approved by ISS1/SCLAB
- Octopus Deploy instance in SL4
- Access to all servers in all zone allowed (HTTPS/SSL)
- Accesible through Jump Host for humans

--
## Jenkins integration
- Jenkins pipeline library
- Old fashioned UI configuration (in beat-jenkins)

![orchestration-1](images/octopus-deploy-pipeline.png)

--
## .Net Web Applications
- Direct access to servers
- SFTP to OSW1
- Rest API (comming soon to cinema near to you)

--
## .Net Web Applications
### Running for
- RB.ATMO.ServiceManagement
- RB.PT.NA.Dremel.IdeaBuilder
- RB.PT.NA.ProductRegistration
- RB.PT.eShop.*
- RB.SH.*
- NA services are comming

--
## .Net Web Applications
### Make it deployable
- Consistent versioning
- Consistent environments naming

<img src="images/octopus-deploy-environments.png" height="300"/>

--
## .Net Web Applications
### Make it deployable
- Release notes
- OctoPack dependency
- Environment dependent transformations
- Sensitive data removal
- Publish to Artifactory

--
## .Net Web Applications
### Bidirectional traceability
- TFS labels
- Release notes linked in Octopus Deploy
- Version number in Jenkins/Octopus Deploy

---
## Demo

---
## Thank you
![docker-qa](images/qa.jpg)