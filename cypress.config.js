const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '9wyhfz',
  viewportHeight: 880,
  viewportWidth: 1280,
  defaultCommandTimeout: 8000,
  video: true,

  // Configuração E2E
  e2e: {
    baseUrl: 'http://localhost:8080', // Removido file://
    setupNodeEvents(on, config) {
      // Plugins aqui
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js'
  },

  // Configuração Component Testing (separado do E2E)
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
})
