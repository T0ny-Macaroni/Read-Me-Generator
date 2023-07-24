
const fs = require('fs')
const inquirer = require('inquirer');

function generateBadge(license) {
    if (license === 'MIT') {
        return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)
    }else if (license === 'MPL') {
        return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
    }else if (license === 'IBM'){
        return ('[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)');
    }else{
        return (' ');
    }
}
const generateMarkDown = response => {
return `# ${response.title}
${generateBadge(response.license)}
## description 
${response.description}
# Table of Contents
1. [description](##description)
2. [installation](##installation)
3. [usage](##usage)
4. [credit](##credit)
5. [test](##test)
6. [license](##license)
7. [questions](##questions)


## installation
${response.install}

## usage
${response.usage}

## Test Instructions
to test project run ${response.test} in your terminal

## Credit
Shout out to ${response.credit}

## Questions
for any questions or concerns you may contact me at my GitHub, ${response.gitHub} or by email at ${response.email}

## license
licensed under ${response.license}
`
}




// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What would you like your title to be?',
            name: 'title',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please write a description for your project: ',
            name: 'description',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project description. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'install',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project installation guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'how will your project be used?',
            name: 'usage',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project usage guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'any notable contributions or credits?',
            name: 'credit',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project contributors.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'what command should be run to test project?',
            name: 'test',
            default: 'npm test',
        },
        {
            type: 'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: ['MIT', 'MPL', 'IBM'],
            default: 'MIT',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project contributors');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is your GitHub Username?",
            name: 'gitHub',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project contributors');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address',
            name: 'email',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project contributors');
                    return false;
                }
            }
        }
    ])
        .then((response) => {
            console.log(response);
                fs.writeFile('Generated-README.md', generateMarkDown(response), err => {
                    if (err) {
                        console.log('Error!');
                        return
                    } else {
                        console.log('Your README has been successfully created');
                    }
                })
            })
}

questions()
