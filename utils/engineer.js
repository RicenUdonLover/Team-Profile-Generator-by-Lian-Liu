const inquirer = require("inquirer");
const promptTeamMember = require('./teamBuilder.js')
const addToTeam = require('./addToTeam.js')

const Engineer = function (name, id, email, github) {
    this.role = 'Engineer'
    this.name = name
    this.id = id
    this.email = email
    this.githubUsername = github
}
function promptEngineer(callback) {
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
        const {name, id, email, github} = answers
        const engineer = new Engineer (name, id, email, github)
        // console.log(engineer)
        addToTeam('./assets/db/team.json', engineer)
        callback()
    });
}

module.exports = promptEngineer