const fs = require('fs');
const { restoreDefaultPrompts } = require('inquirer');
const inquirer = require('inquirer')

//Questions Object
let questionsObj = {
    title:'test',
    descriptionCntnt:'test',
    installCntnt:'test',
    usageCntnt:'test',
    screenShots:'',
    contribCntnt:'test',
    testCntnt:'test',
    licenseCntnt:'test',
    userName:'test',
    email:'test',
    emailInstr:'test',
};

//Object Destructuring
let { 
    title, 
    descriptionCntnt,
    installCntnt,
    usageCntnt,
    screenShots,
    contribCntnt,
    testCntnt,
    licenseCntnt,
    userName,
    email,
    emailInstr,
} = questionsObj;

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


        
      ];
      
      inquirer.prompt(questions).then((answers) => {

        console.log(answers);
         
          title =  answers.title;
          descriptionCntnt = answers.description;
          installCntnt = answers.install;
          usageCntnt = answers.usage;
          screenShots = '';
          contribCntnt = answers.contrib;
          testCntnt = answers.test;
          licenseCntnt = answers.license;
          userName = answers.username;
          email = answers.email;
          emailInstr = answers.emailInstr;

          console.log('-----------------originalobj');
          console.log(readmeSkeleton);
          writeToFile('GntReadme.md',readmeSkeleton);
      

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
