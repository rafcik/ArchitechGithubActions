#Architech

Example project that uses nx workspace and Github Actions for CI/CD. It executed the following actions:

* Checkout code
* Cache node modules
* Install dependencies
* Run linter
* Run SonarCloud scan
* Run tests
* Run e2e tests
* Build project
* Deploy project to Github Pages (only for master branch)
* Run lighthouse audit for deployed project (only for master branch)
