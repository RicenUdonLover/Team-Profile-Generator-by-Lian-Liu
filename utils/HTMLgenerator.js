const fs = require("fs");

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
  <body>
      <div class="container">
          <div class="row">`;
  for (const member of team) {
    html += `
                        <div class="col-sm-4">
                            <div class="card bg-white">
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
                </div>
                <footer class="bg-primary text-white p-4 text-center">
                  <p>2023 Made by Lian Liu</p>
                </footer>
            </body>
            </html>`;

  fs.writeFileSync("./dist/team.html", html);
}

module.exports = generateHTML
