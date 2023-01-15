
function generateManager(manager) {
const {name, id, email, officeNumber} = manager
return `

`
}




function generateTeam(menber) {
    const manager = renderLicenseSection(answers.license)
    const readme =
      `
  # ${answers.title.trim()}
  ## Description
  ${answers.description.trim()}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${answers.installation.trim()}
  ## Usage
  ${answers.usage.trim()}
  ${licenseSection}
  ## Contributing
  ${answers.contributing.trim()}
  ## Tests
  ${answers.tests.trim()}
  ## Questions
  For any questions, please contact me at [${answers.email.trim()}](mailto:${answers.email.trim()}). You can also check out my GitHub profile at [https://github.com/${answers.github.trim()}](https://github.com/${answers.github.trim()}).
  `
    return readme
  };