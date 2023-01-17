const inquirer = require("inquirer");
const promptEngineer = require('./engineer.js');
const promptIntern = require('./intern.js');
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
                promptEngineer(promptTeamMember);
                break;
            case "Intern":
                promptIntern(promptTeamMember);
                break;
            default:
                // console.log(team)
                // generateHTML();
                break
        }
    }); return
}

module.exports = promptTeamMember

