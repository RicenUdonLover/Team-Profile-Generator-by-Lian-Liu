const { log } = require('console');
const fs = require('fs')

const addToTeam = (file, content) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`reading content from ${file}...`)
        const parsedData = JSON.parse(data);
        // console.log(10, parsedData)
        parsedData.push(content);
        // console.log(13, JSON.stringify(parsedData));
        fs.writeFile(file, JSON.stringify(parsedData), (err) => err? console.error(err) : console.log(`${parsedData} was logged to ${file}.`) );
      }
    });
  };

  module.exports = addToTeam