// Packages needed for this application
const inquirer = require('inquirer');


// Array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a short description with the what, why, and how of your project:',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select the license for your project:',
        choices: ['MIT License','APACHIE 2.0','GNU GPLv3','Artistic License 2.0','None'],
        default: 'MIT License',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter an explanation, if needed, for how to install your application:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What does the user need to know about using this repo?',
    },
    {
        name: 'collaborators',
        type: 'input',
        message: 'List your collaborators and sources, if any:',
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'What does the user need to know about contributing to this repo?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'How can someone test your application?',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Enter your GitHub username:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
