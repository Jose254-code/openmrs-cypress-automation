describe('Patient Search', () => {
    beforeEach(() => {
      cy.login()
    })
    
    it('should search for existing patients', () => {
      cy.navigateToApp('Find Patient Record')
      cy.get('#patient-search').should('be.visible')
      cy.searchPatient('John')
      cy.get('#patient-search-results-table tbody tr').should('have.length.greaterThan', 0)
    })
    
    it('should handle no search results', () => {
      cy.navigateToApp('Find Patient Record')
      cy.searchPatient('NonexistentPatient12345')
      cy.get('.no-results').should('contain', 'No patients found')
    })
    
    it('should allow patient selection from search results', () => {
      cy.navigateToApp('Find Patient Record')
      cy.searchPatient('John')
      cy.get('#patient-search-results-table tbody tr').first().click()
      cy.url().should('include', '/patient.page')
    })
  })
  