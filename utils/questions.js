const checkEmpty = input => input.length !== 0 || `Your input cannot be empty.`

const checkInteger = input => {
    const isEmpty = input.length === 0
    const isInteger = Number.isInteger(parseFloat(input))
    return isEmpty ? `Your input cannot be empty.` : isInteger ? true : `Your input must be an integer.`;
}

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter team manager's name:",
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "id",
        message: "Enter team manager's employee ID:",
        validate: input => checkInteger(input)
    },
    {
        type: "input",
        name: "email",
        message: "Enter team manager's email address:",
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter team manager's office number:",
        validate: input => checkInteger(input)
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
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "id",
        message: "Enter engineer's employee ID:",
        validate: input => checkInteger(input)
    },
    {
        type: "input",
        name: "email",
        message: "Enter engineer's email address:",
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer's GitHub username:",
        validate: input => checkEmpty(input)
    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name:",
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "id",
        message: "Enter intern's employee ID:",
        validate: input => checkInteger(input)
    },
    {
        type: "input",
        name: "email",
        message: "Enter intern's email address:",
        validate: input => checkEmpty(input)
    },
    {
        type: "input",
        name: "school",
        message: "Enter intern's school:",
        validate: input => checkEmpty(input)
    }
]

module.exports = { managerQuestions, buildTeam, engineerQuestions, internQuestions }