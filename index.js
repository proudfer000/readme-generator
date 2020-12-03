const fs = require('fs');
const { addListener, title } = require('process');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();





const readmeSkeleton = `# ${ /* Your Project Title */title} 

## Description 

${ /* Description content */title}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing to the project](#Contributing to the project)
* [Test instructions](#Test instructions)
* [License](#license)
* [Questions](#Questions)


## Installation

${ /* Installation instructions */title}


## Usage 

${ /* Usage instructions */title}

${ /* Photos */title} optional


## Contributing to the project

${ /* Contributing content */title}



## Test instructions

${ /* Test instructions content */title}



## License

${ /* license content */title}



## Questions

${ /* Username */title}
${ /* email */title}
${ /* how to reach me description */title}


`;