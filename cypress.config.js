const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'r81t1a',
  viewportHeight: 880,
  viewportWidth: 1280,
  defaultCommandTimeout: 8000,
  video: true,
  e2e: {
    baseUrl: 'http://localhost:8080', // ajuste conforme seu servidor local
    setupNodeEvents(on, config) {
      // espaço reservado para plugins ou eventos customizados
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js'
  }
})
