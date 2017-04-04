Step Functions
=====

About
-----
This project is designed to be an example use case for [AWS Step Functions](https://aws.amazon.com/step-functions/) using lambdas. The code for the individual lambdas is managed by the [Apex Framework](http://apex.run/).

Installation
-----
* Install Apex: `curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sudo sh`
* Setup AWS config (if you haven't already): `echo -e "[profile asurion-dev.pspdevops]\nregion = us-east-1" >> ~/.aws/config`
* Install modules: `npm install`

Usage
-----
You can run any of the [Apex commands](http://apex.run/#deploying-functions) from the root directory. The Step Function definition configurations which were used to connect the deployed lambdas can be viewed in the `step_definitions` directory.

Testing
-----
You can run `npm test` to run unit tests with karma. Apex will automatically run unit tests before deployment.
