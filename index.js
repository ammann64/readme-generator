const fs = require('fs');
const inquirer = require('./node_modules/inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//List of available licenses in an array.
const licenses = [{name: 'Apache License 2.0', value: {license: 'Apache License 2.0', abbreviation: 'apache'}},
{name: 'Artistic License 2.0', value: {license: 'Artistic License 2.0', abbreviation: 'artistic'}},
{name: 'Boost Software License 1.0', value: {license: 'Boost Software License 1.0', abbreviation: 'bsl'}},
{name: 'Creative Commons Attribution 4.0', value: {license: 'Creative Commons Attribution 4.0', abbreviation: 'cc-by'}},
{name: 'Eclipse Public License 2.0', value: {license: 'Eclipse Public License 2.0', abbreviation: 'epl'}},
{name: 'GNU General Public License 3.0', value: {license: 'GNU General Public License 3.0', abbreviation: 'gpl'}},
{name: 'Microsoft Public License', value: {license: 'Microsoft Public License', abbreviation: 'ms-pl'}},
{name: 'MIT', value: {license: 'MIT', abbreviation: 'mit'}},
{name: 'Open Software License', value: {license: 'Open Software License', abbreviation: 'osl'}}]
//Question objects to receive user input via inquirer
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        default: ''
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
        default: ''
    },
    {
        type: 'input',
        message: 'How does the user install your application?',
        name: 'installation',
        default: ''
    },
    {
        type: 'input',
        message: 'How does the user use your application?',
        name: 'usage',
        default: ''
    },
    {
        type: 'input',
        message: 'What are the guidelines to contributing to your project?',
        name: 'contribution',
        default: ''
    },
    {
        type: 'input',
        message: 'How does a developer test your project?',
        name: 'testing',
        default: ''
    },
    {
        type: 'list',
        message: 'Please choose a license:',
        name: 'license',
        choices: licenses,
        default: {license: '', abbreviation: ''}
    },
    {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'username',
        default: ''
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
        default: ''
    }
];

// Function to write README file
function writeToFile(fileName, data) {
   content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
    err ? console.error(err) : console.log('Creating readme...') 
    });
}

function init() {
    console.log('Welcome to the readme generator! Please answer the following questions to generate your project readme.'); //Intro message
    inquirer
        .prompt(questions) //Prompts the user for input with the questions objects defined earlier
        
        .then((response) =>
        {
            // console.log(response);
            // console.log(response.license);
            writeToFile(`${response.title.trim()}README.md`, response); //Calls the write to file function to write the readme
        }
        );
}

// Function call to initialize app
init();
