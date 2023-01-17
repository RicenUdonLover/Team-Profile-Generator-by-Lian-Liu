const fs = require('fs')

const addToTeam = (file, content) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        fs.writeFile(file, parsedData);
      }
    });
  };

  module.exports = addToTeam