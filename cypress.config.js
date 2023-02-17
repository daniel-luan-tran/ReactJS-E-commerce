// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: "cypress/integration/examples/*.js",
//     screenshotsFolder: "cypress/failures/screenshots"
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    screenshotsFolder: "cypress/failures/screenshots"
  },
});