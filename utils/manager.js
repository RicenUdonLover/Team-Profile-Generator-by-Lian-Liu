const inquirer = require("inquirer");
const promptTeamMember = require('./teamBuilder.js')
const addToTeam = require('./addToTeam.js')
const Manager = function(name, id, email, office) {
    this.role = 'Manager'
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = office
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
       const manager = new Manager(name, id, email, officeNumber)
    //    console.log(manager)
       addToTeam('./assets/db/team.json', manager)
       promptTeamMember()
    });
}

module.exports = promptTeamManager