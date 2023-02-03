const inquirer = require("inquirer");
const { managerQuestions, buildTeam, engineerQuestions, internQuestions } = require('./utils/questions.js')
const { Manager, Engineer, Intern } = require('./lib/classes.js');
const generateHTML = require('./utils/HTMLgenerator')
const team = []



const createTeam = async function () {
    try {
        const manager = await createManager();
        team.push(manager);
        while (true) {
                const nextAnswers = await askTeamMember();
                if (nextAnswers.role === "Engineer") {
                    const engineer = await createEngineer();
                    team.push(engineer);
                } else if (nextAnswers.role === "Intern") {
                    const intern = await createIntern();
                    team.push(intern);
                } else {
                    if (team.length === 1) {
                        console.log("There is only a manager, please add more team members.")
                    } else {
                        const proceedAnswers = await askProceed(JSON.stringify(team));
                        if (proceedAnswers.proceed === "Create HTML") {
                            console.log(`HTML file created! Please to to /dist to find the file.`)
                            generateHTML(team)
                        }
                        break;
                    }
                }
            }
        } catch (err) {
        console.log(err);
    }
}

const createManager = async function () {
    const answers = await inquirer.prompt(managerQuestions);
    const { name, id, email, officeNumber } = answers;
    return new Manager(name, id, email, officeNumber);
}

const askProceed = async function (team) {
    return inquirer.prompt({
        type: "list",
        name: "proceed",
        message: `Your team looks like ${team}. What would you like to do?`,
        choices: ["Create HTML", "Add more team members"]
    });
}

const askTeamMember = async function () {
    return inquirer.prompt(buildTeam);
}

const createEngineer = async function () {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const { name, id, email, github } = engineerAnswers;
    return new Engineer(name, id, email, github);
}

const createIntern = async function () {
    const internAnswers = await inquirer.prompt(internQuestions);
    const { name, id, email, school } = internAnswers;
    return new Intern(name, id, email, school);
}


createTeam()