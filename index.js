const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//List of available licenses in an array.
const licenses = [{name: 'Apache License 2.0', value: 'apache'},
{name: 'Artistic License 2.0', value: 'artistic'},
{name: 'Boost Software License 1.0', value: 'bsl'},
{name: 'Creative Commons Attribution 4.0', value: 'cc-by'},
{name: 'Eclipse Public License 2.0', value: 'epl'},
{name: 'GNU General Public License 3.0', value: 'gpl'},
{name: 'Microsoft Public License', value: 'ms-pl'},
{name: 'MIT', value: 'mit'},
{name: 'Open Software License', value: 'osl'}]
//Question objects to receive user input via inquirer
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

// Function to write README file
function writeToFile(fileName, data) {
   content = generateMarkdown.generateMarkdown(data);
    fs.writeFile(fileName, content);
}

function init() {
    console.log('Welcome to the readme generator! Please answer the following questions to generate your project readme.'); //Intro message
    inquirer
        .prompt(questions) //Prompts the user for input with the questions objects defined earlier
        
        .then((response) =>
        {
            writeToFile('README.md', response); //Calls the write to file function to write the readme
        }
        );
}

// Function call to initialize app
init();
