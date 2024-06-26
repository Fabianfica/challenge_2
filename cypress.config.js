// const { defineConfig } = require("cypress");
// const csvtojson = require('csvtojson');
// const path = require('path');
// const fs = require('fs');
// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://www.saucedemo.com/",
    //  specPattern: "/Users/fabian/Desktop/Finallyhomework/cypress/e2e/pages/*.spec.js",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on('task', {
//         parseCsv({ filePath }) {
//           const absolutePath = path.resolve('cypress/fixtures', filePath);
//           if (!fs.existsSync(absolutePath)) {
//             throw new Error(`El archivo no existe: ${absolutePath}`);
//           }
//           return csvtojson().fromFile(absolutePath);
//         }
//       });
//     },
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: "/Users/fabian/Desktop/Finallyhomework/cypress/e2e/pages/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

