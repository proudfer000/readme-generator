const fs = require('fs');
const inquirer = require('inquirer')

//Questions Object
const questionsObj = {
    title:'',
    descriptionCntnt:'',
    installCntnt:'',
    usageCntnt:'',
    photos:[],
    photosNames:[];
    contribCntnt:'',
    testCntnt:'',
    licenseCntnt:'',
    userName:'',
    email:'',
    emailInstr:'',
};

//Object Destructuring
const { 
    title, 
    descriptionCntnt,
    installCntnt,
    usageCntnt,
    photos,
    photosNames,
    contribCntnt,
    testCntnt,
    licenseCntnt,
    userName,
    email,
    emailInstr,
} = questionsObj;

// function to write README file
function writeToFile(fileName, data) {
}

// Questions functions
function init() {

}


//Readme Template Literals Skeleton
const readmeSkeleton = `# ${ /* Your Project Title */title} 

## Description 

${ /* Description content */descriptionCntnt}


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing to the project](#contributing-to-the-project)
* [Test instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)


## Installation

${ /* Installation instructions */installCntnt}


## Usage 

${ /* Usage instructions */usageCntnt}

${ /* Photos */''} 


## Contributing to the project

${ /* Contributing content */contribCntnt}



## Test instructions

${ /* Test instructions content */testCntnt}



## License

${ /* license content */licenseCntnt}



## Questions

${ /* Username */userName}

${ /* email */email}

${ /* how to reach me description */emailInstr}

`;