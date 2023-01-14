const inquirer = require("inquirer");
const teamBuilder = require('./teamBuilder.js')
const Intern = function (name, id, email, school) {
    this.role = 'Intern'
    this.name = name
    this.id = id
    this.email = email
    this.schoolName = school
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
        const {name, id, email, school} = answers
        const engineer = new Intern (name, id, email, school)
        teamBuilder()
    });
}

module.exports = promptIntern