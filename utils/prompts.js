const inquirer = require("inquirer");

const Manager = function(name, id, email, office) {
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = office
}

const Engineer = function (name, id, email, github) {
    this.name = name
    this.id = id
    this.email = email
    this.githubUsername = github
}

const Intern = function (name, id, email, school) {
    this.name = name
    this.id = id
    this.email = email
    this.schoolName = school
}

function promptTeamManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter team manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter team manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter team manager's office number:"
        }
    ]).then(answers => {
       const {name, id, email, officeNumber} = answers
       const teamManager = new Manager(name, id, email, officeNumber)

    });
}

function promptTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select team member's role:",
            choices: ["Engineer", "Intern", "Finish building team"]
        }
    ]).then(answers => {
        switch(answers.role) {
            case "Engineer":
                promptEngineer();
                break;
            case "Intern":
                promptIntern();
                break;
            case "Finish building team":
                generateHTML();
                break;
        }
    });
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's GitHub username:"
        }
    ]).then(answers => {
        // store the answers in a variable or object
        // move on to the next step, such as prompting for another team member or generating the HTML file
    });
}

function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school:"
        }
    ]).then(answers => {
        // store the answers in a variable or object
        // move on to the next step, such as prompting for another team member or generating the HTML file
    });
}
