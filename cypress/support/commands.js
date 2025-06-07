Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  text: 'Test.'
}) => {
  cy.get('#firstName').clear().type(data.firstName)
  cy.get('#lastName').clear().type(data.lastName)
  cy.get('#email').clear().type(data.email)
  cy.get('#open-text-area').clear().type(data.text)
  cy.contains('button', 'Enviar').click()
})
