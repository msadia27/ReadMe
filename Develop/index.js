// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("../utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
    },
    {
    type: "input",
    name: "description",
    message: "Please enter a description for your project."
    },
    {
    type: "input",
    name: "installation",
    message: "What are the instructions for installation of your project?"
    },
    {
    type: "input",
    name: "usage",
    message: "How do you use your project?"
    },
    {
    type: "input",
    name: "licenses",
    message: "What kind of licenses your project need?",
    choices: ["GNU", "Apache", "MIT", "Mozilla"
    ]
    },
    {
    type: "input",
    name: "contributions",
    message: "How can user contribute to your project?"
    },
    {
    type: "input",
    name: "github",
    message: "What is your github username?"
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?"
    }
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data)
        if(err){
            console.log(err)
        } else {
            console.log("You have successfully created your README!")
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })
};

// Function call to initialize app
init();
