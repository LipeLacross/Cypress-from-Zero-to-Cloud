describe('Política de Privacidade', () => {
  Cypress._.times(3, () => {
    it('deve exibir corretamente a página de política de privacidade', () => {
      cy.visit('./src/privacy.html')

      cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
      cy.contains('p', 'Talking About Testing').should('be.visible')
    })
  })
})
