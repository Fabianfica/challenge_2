const { defineConfig } = require("cypress");
const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com/",
    specPattern: "/Users/fabian/Desktop/challenge_2/cypress/e2e/pages/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        parseCsv({ filePath }) {
          const absolutePath = path.resolve('cypress/fixtures', filePath);
          if (!fs.existsSync(absolutePath)) {
            throw new Error(`El archivo no existe: ${absolutePath}`);
          }
          return csvtojson().fromFile(absolutePath);
        }
      });
    },
  },
});
