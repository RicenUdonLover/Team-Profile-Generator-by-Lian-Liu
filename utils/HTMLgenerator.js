const fs = require("fs");

const sortTeam = team => {
  var sortedTeam = team.sort((a, b) => {
      if (a.officeNumber) {
          return -1;
      } else if (b.officeNumber) {
          return 1;
      } else if (a.github) {
          return -1;
      } else if (b.github) {
          return 1;
      } else {
          return 0;
      }
  });
  return sortedTeam
}

const generateHTML = (team) => {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <title>My Team</title>
  </head>
    <body class="bg-light">
        <div class="container">
          <header class="text-center bg-primary text-white p-4 my-5">
              <h1>${team[0].name}'s Team</h1>
          </header>
          <div class="row">`;
  
    for (const member of team) {
      html += `
                <div class="col-sm-4">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            ${member.name} - ${member.getRole()}
                        </div>
                        <div class="card-body">
                            <p>ID: ${member.id}</p>
                            <p>Email: <a href="mailto:${member.email}">${member.email}</a>
                         </p>`;
      if (member.getRole() === "Manager") {
        html += `<p>Office Number: ${member.officeNumber}</p>`;
      } else if (member.getRole() === "Engineer") {
        html += `<p>Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>
        </p>`;
      } else if (member.getRole() === "Intern") {
        html += `<p>School: ${member.school}</p>`;
      }
      html += `
                        </div>
                    </div>
                </div>`;
    }
    html += `
            </div>
            <footer class="text-center mt-5 bg-primary text-white p-4">
              <p>2023 Made by <a class="text-white" href="https://github.com/RicenUdonLover" target="_blank">Lian Liu</a></p>
            </footer>
        </div>
    </body>
    </html>`;
  
    fs.writeFileSync("./dist/team.html", html);
  }
  
  module.exports = generateHTML
  