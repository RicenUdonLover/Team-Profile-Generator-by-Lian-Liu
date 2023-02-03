const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name:",
            validate: name => name.length !== 0 || "Name cannot be empty."
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
    ]

const buildTeam = [
    {
        type: "list",
        name: "role",
        message: "Select team member's role:",
        choices: ["Engineer", "Intern", "Finish building team"]
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter engineer's name:",
        validate: name => name.length !== 0 || "Name cannot be empty."
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
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name:",
        validate: name => name.length !== 0 || "Name cannot be empty."
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
]

module.exports = { managerQuestions, buildTeam, engineerQuestions, internQuestions }