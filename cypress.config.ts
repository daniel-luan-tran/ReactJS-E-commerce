import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
    screenshotsFolder: "cypress/failures/screenshots"
  },
});
