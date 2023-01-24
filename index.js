const inquirer = require("inquirer");
const { managerQuestions, buildTeam, engineerQuestions, internQuestions } = require('./utils/questions.js')
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const team = []


// Prompts user for manager input.
inquirer.prompt(managerQuestions).then(answers => {
    const { name, id, email, officeNumber } = answers;  // Destructuring the answers object to extract the properties.
    const manager = new Manager(name, id, email, officeNumber); //Creates manager object and adds to team array.
    team.push(manager);
    return inquirer.prompt(buildTeam); //Prompts user for next team member role.
}).then((answers) => {
    // Prompts user for engineer input, creates engineer object and adds to team array. Prompts user for next team member role.
    switch (answers.role) {
        case "Engineer":
            return inquirer.prompt(engineerQuestions).then(answers => {
                const { name, id, email, github } = answers;
                const engineer = new Engineer(name, id, email, github);
                team.push(engineer);
                return inquirer.prompt(buildTeam);
            });
            break;
        // Prompts user for intern input, creates intern object and adds to team array. Prompts user for next team member role.
        case "Intern":
            return inquirer.prompt(internQuestions).then(answers => {
                const { name, id, email, school } = answers;
                const intern = new Intern(name, id, email, school);
                team.push(intern);
                return inquirer.prompt(buildTeam);
            });
            break;
        // Ends team building process, logs team array to console if more than one member, otherwise reminds user to add more members.
        default:
            if (team.length === 1) {
                console.log("There is only a manager, please add more team members.")
                return inquirer.prompt(buildTeam);
            } else { console.log(team) }
            break;
    }
});
