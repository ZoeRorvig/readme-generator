// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [
    {
        name: 'name',
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
        choices: ['MIT', 'APACHIE 2.0', 'GNU GPLv3', 'Artistic 2.0', 'None'],
        default: 'MIT',
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
        message: 'Enter the contribution guidelines:',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Enter the test instructions:',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Enter your GitHub username:',
    },
    {
        name: 'email',
        type: 'email',
        message: 'Enter your email address:',
    },
];

// Function to write README file
function writeToFile(data) {
    fs.writeFile(`./generated-README/README.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log(`Successfully generated README!`)
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
