const inquirer = require("inquirer");
const { managerQuestions, buildTeam, engineerQuestions, internQuestions } = require('./utils/questions.js')
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
const team = []



inquirer.prompt(managerQuestions).then(answers => {
    const { name, id, email, officeNumber } = answers;
    const manager = new Manager(name, id, email, officeNumber);
    // console.log(manager);
    team.push(manager);
    return inquirer.prompt(buildTeam);
}).then((answers) => {
    switch (answers.role) {
        case "Engineer":
            inquirer.prompt(engineerQuestions).then(answers => {
                const { name, id, email, github } = answers;
                const engineer = new Engineer(name, id, email, github);
                team.push(engineer);
                return inquirer.prompt(buildTeam);
            });            
            break;
        case "Intern":
            inquirer.prompt(internQuestions).then(answers => {
                const { name, id, email, school } = answers;
                const engineer = new Intern (name, id, email, school);
                team.push(engineer);
                return inquirer.prompt(buildTeam);
            break;
        default:
            break
    }
});
