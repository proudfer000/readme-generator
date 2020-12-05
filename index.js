const fs = require('fs');
const inquirer = require('inquirer')


// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 

    });
}

// Inquirer Questions
var inquirerQuestions = () => {
  
    var questions = [

        {
          type: 'input',
          name: 'title',
          message: "What's the Title",
        },
/*
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
            type: 'editor',
            name: 'contrib',
            message: 'Please add guidelines to contribute (3 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },


          {
            type: 'editor',
            name: 'test',
            message: 'Please add guidelines for using the test (3 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 3) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },



          {
            type: 'list',
            name: 'license',
            message: 'What license do you need?',
            choices: ['GNU', 'MIT'],
            filter: function (val) {
              return val.toLowerCase();
            },
          },


          {
            type: 'input',
            name: 'username',
            message: "What's your github username?"
          },


          {
            type: 'input',
            name: 'email',
            message: "What's your email?"
          },


          {
            type: 'editor',
            name: 'emailInstr',
            message: 'Please describe how to reach you (1 lines or more).',
            validate: function (text) {
              if (text.split('\n').length < 1) {
                return 'Must be at least 3 lines.';
              }
        
              return true;
            },
          },


        */
      ];
      
      inquirer.prompt(questions).then((answers) => {

        console.log(answers);
      
          let title =  answers.title;
          let descriptionCntnt = answers.description;
          let installCntnt = answers.install;
          let usageCntnt = answers.usage;
          let screenShots = '';
          let contribCntnt = answers.contrib;
          let testCntnt = answers.test;
          let licenseCntnt = answers.license;
          let userName = answers.username;
          let email = answers.email;
          let emailInstr = answers.emailInstr;

//Readme Template Literals Skeleton
const readmeContent = 
  
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

writeToFile('GntReadme.md',readmeContent);
      

      });

}; 







inquirerQuestions();
