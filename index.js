const inquirer = require("inquirer");
const { managerQuestions, buildTeam, engineerQuestions, internQuestions } = require('./utils/questions.js')
const team = []

const Manager = function (name, id, email, office) {
    this.role = 'Manager'
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = office
}

inquirer.prompt(managerQuestions).then(answers => {
    const {name, email, id, officeNumber} = answers
    const manager = new Manager(name, id, email, officeNumber)
    console.log(manager)
    team.push(manager)
})
// .then(inquirer.prompt(buildTeam).then(answers => {
//     switch(answers.role) {
//         case "Engineer":
//             console.log(answers);
//             break;
//         case "Intern":
//             console.log(answers);
//             break;
//         default:

//             break
//     }
// }))