const fs = require('fs');
const inquirer = require('inquirer');
const licenses = [{name: 'Academic Free License v3.0', value: 'afl'},
{name: 'Apache License 2.0', value: 'apache'},
{name: 'Artistic License 2.0', value: 'artistic'},
{name: 'Boost Software License 1.0', value: 'bsl'},
{name: 'Creative Commons Attribution 4.0', value: 'cc-by'},
{name: 'Educational Community License v2.0', value: 'ecl'},
{name: 'Eclipse Public License 2.0', value: 'epl'},
{name: 'GNU General Public License 3.0', value: 'gpl'},
{name: 'Microsoft Public License', value: 'ms-pl'},
{name: 'MIT', value: 'mit'},
{name: 'Mozilla Public License', value: 'mpl'},
{name: 'Open Software License', value: 'osl'},
{name: 'The Unlicense', value: 'unlicense'}]
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How does the user install your application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How does the user use your application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the guidelines to contributing to your project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How does a developer test your project?',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'Please choose a license:',
        name: 'license',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
    console.log('Welcome to the readme generator! Please answer the following questions to generate your project readme.');
    inquirer
        .prompt(questions)
        
        .then((response) =>
        {
            console.log(response);
            writeToFile('README.md', response);
        }
        );
}

// Function call to initialize app
init();
