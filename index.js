const fs = require('fs');
const inquirer = require('inquirer')

//Questions Object
const questionsObj = {
    title:'test',
    descriptionCntnt:'test',
    installCntnt:'test',
    usageCntnt:'test',
    photos:[],
    photosNames:[],
    contribCntnt:'test',
    testCntnt:'test',
    licenseCntnt:'test',
    userName:'test',
    email:'test',
    emailInstr:'test',
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
//function writeToFile(fileName, data) {
//}

// Inquirer functions
var inquirerQuestions = () => {
  
    var questions = [

        {
          type: 'input',
          name: 'title',
          message: "What's the Title",
        },

        {
            type: 'editor',
            name: 'description',
            message: 'Please describe your repository (3 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },


          {
            type: 'editor',
            name: 'install',
            message: 'Please explain how to install your repository (3 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },


          {
            type: 'editor',
            name: 'usage',
            message: 'Please provide examples for use (3 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },


          {
            type: 'input',
            name: 'installation',
            message: "What's your last name"},


        
      ];
      
      inquirer.prompt(questions).then((answers) => {
        console.log(answers);
      });

}; 


//Readme Template Literals Skeleton
const readmeSkeleton =

`# ${ /* Your Project Title */title} 

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


inquirerQuestions();