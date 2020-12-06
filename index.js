const fs = require('fs');
const inquirer = require('inquirer')

// function to write README file
function writeToFile(fileName, data) {

  console.log(data);
  fs.writeFile(fileName, data, (err) => {

    // In case of a error throw err. 
    if (err) throw err;

  });

  fs.readFile(fileName, 'utf-8', function (err, data) {
    if (err) throw err;

    var newValue = data.replace(/undefined/gim, '');

    fs.writeFile(fileName, newValue, 'utf-8', function (err) {
      if (err) throw err;
      console.log('filelistAsync complete');
    });

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
      name: "confInstall",
      type: "confirm",
      message: "Dow you want to add Install section?",
    },

    {
      type: 'editor',
      name: 'install',
      message: 'Please explain how to install your repository (3 lines or more).',
      when: (answers) => answers.confInstall === true,
      validate: function (text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines.';
        }

        return true;
      },
    },

    {
      name: "confInImages",
      type: "confirm",
      message: "Dow you want to add Images to install section?",
    },

    {
      type: 'editor',
      name: 'installImg',
      message: 'Please add images to install section (1 line or more).',
      when: (answers) => answers.confInImages === true,
      validate: function (text) {
        if (text.split('\n').length < 1) {
          return 'Must be at least 3 lines.';
        }

        return true;
      },
    },

    {
      type: 'editor',
      name: 'usage',
      message: 'Please provide examples for use (1 line or more).',
      validate: function (text) {
        if (text.split('\n').length < 1) {
          return 'Must be at least 3 lines.';
        }

        return true;
      },
    },

    {
      name: "confUseImages",
      type: "confirm",
      message: "Dow you want to add Images to Usage section?",
    },

    {
      type: 'editor',
      name: 'usageImg',
      message: 'Please add images to Usage section (1 line or more).',
      when: (answers) => answers.confInImages === true,
      validate: function (text) {
        if (text.split('\n').length < 1) {
          return 'Must be at least 3 lines.';
        }

        return true;
      },
    },

    {
      name: "confGuide",
      type: "confirm",
      message: "Dow you want to add Contribute section?",
    },

    {
      type: 'editor',
      name: 'contrib',
      message: 'Please add guidelines to contribute (3 lines or more).',
      when: (answers) => answers.confGuide === true,
      validate: function (text) {
        if (text.split('\n').length < 3) {
          return 'Must be at least 3 lines.';
        }

        return true;
      },
    },

    {
      name: "confTest",
      type: "confirm",
      message: "Dow you want to add a Test section?",
    },

    {
      type: 'editor',
      name: 'test',
      message: 'Please add guidelines for using the test (3 lines or more).',
      when: (answers) => answers.confTest === true,
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
      name: 'completeName',
      message: "What's your First name and lastname?"
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

    let title = answers.title;
    let descriptionCntnt = answers.description;
    let installCntnt = answers.install;
    let usageCntnt = answers.usage;
    let contribCntnt = answers.contrib;
    let testCntnt = answers.test;
    let licenseType = answers.license;
    let licenseLink = '';
    let fullName = answers.completeName.trim();
    let userName = answers.username.trim();
    let email = answers.email.trim();
    let emailInstr = answers.emailInstr;
    let installTitle = '';
    let contributeTitle = '';
    let testTitle = '';

    let GNU = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`
    let MIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.MD)`

    var currentYear = () => {
      let d = new Date();
      return d.getFullYear();
    };

    let licenseContent =
      `MIT License

             Copyright (c) [${currentYear()}] [${fullName}]
             
             Permission is hereby granted, free of charge, to any person obtaining a copy
             of this software and associated documentation files (the "Software"), to deal
             in the Software without restriction, including without limitation the rights
             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             copies of the Software, and to permit persons to whom the Software is
             furnished to do so, subject to the following conditions:
             
             The above copyright notice and this permission notice shall be included in all
             copies or substantial portions of the Software.
             
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             SOFTWARE.`

    var install = () => {
      if (answers.confInstall) {

        installTitle = `## Installation`
        return '* [Installation](#installation)'

      }
    };

    var contribute = () => {
      if (answers.confGuide) {

        contributeTitle = `## Contributing to the project`;
        return '* [Contributing to the project](#contributing-to-the-project)'

      }
    };

    var test = () => {
      if (answers.confTest) {

        testTitle = `## Test instructions`;
        return '* [Test instructions](#test-instructions)'
      }
    };

    var licenseBadge = () => {

      if (licenseType == 'mit') {

        writeToFile('LICENSE.MD', licenseContent);
        licenseLink = 'LICENSE.MD'
        return MIT;

      } else {

        licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
        return GNU;

      };

    };



    //Readme Template Literals Skeleton
    const readmeContent =

      `${licenseBadge()}
# ${ /* Your Project Title */title} 

## Description 

${ /* Description content */descriptionCntnt}


## Table of Contents 

${install()}
* [Usage](#usage)
${contribute()}
${test()}
* [Questions](#questions)


${installTitle}

${ /* Installation instructions */installCntnt}

${answers.installImg}


## Usage 

${ /* Usage instructions */usageCntnt}

${answers.usageImg} 


${contributeTitle}

${ /* Contributing content */contribCntnt}



${testTitle}

${ /* Test instructions content */testCntnt}


## License

Copyright © ${currentYear()}, [${fullName}](https://github.com/${userName}).
Released under the [${licenseType.toUpperCase()} License](${licenseLink}).


## Questions

[${userName}](https://github.com/${userName})

[${email}](https://github.com/${email})

${ /* how to reach me description */emailInstr}

`;

    writeToFile('GntReadme.md', readmeContent);


  });

};

inquirerQuestions();
