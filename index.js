const inquirer = require("inquirer");
const {managerQuestions, buildTeam, engineerQuestions, internQuestions} = require('./utils/questions.js')


const Manager = function(name, id, email, office) {
    this.role = 'Manager'
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = office
}