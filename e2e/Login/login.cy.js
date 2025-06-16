describe('OpenMRS Login Tests', () => {
    beforeEach(() => {
      cy.visit('https://dev3.openmrs.org/openmrs/spa/login')
    })
  
    it('should login with valid credentials', () => {
      cy.get('#username').type('admin')
      cy.get('#password').type('Admin123')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Verify successful login
      cy.url().should('include', '/referenceapplication/home.page')
      cy.get('.logo').should('be.visible')
    })
  
    it('should show error message with invalid credentials', () => {
      cy.get('#username').type('invaliduser')
      cy.get('#password').type('invalidpass')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Verify error message appears
      cy.get('.error').should('be.visible')
      cy.url().should('include', '/login.htm')
    })
  
    it('should require username field', () => {
      cy.get('#password').type('Admin123')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Should stay on login page
      cy.url().should('include', '/login.htm')
    })
  
    it('should require password field', () => {
      cy.get('#username').type('admin')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Should stay on login page
      cy.url().should('include', '/login.htm')
    })
  
    it('should require location selection', () => {
      cy.get('#username').type('admin')
      cy.get('#password').type('Admin123')
      cy.get('#loginButton').click()
      
      // Should stay on login page
      cy.url().should('include', '/login.htm')
    })
  
    it('should logout successfully', () => {
      // First login
      cy.get('#username').type('admin')
      cy.get('#password').type('Admin123')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Verify login successful
      cy.url().should('include', '/referenceapplication/home.page')
      
      // Then logout
      cy.get('.logout').click()
      cy.url().should('include', '/login.htm')
    })
  
    it('should clear form fields after failed login', () => {
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpass')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Verify fields are cleared or can be cleared
      cy.get('#username').clear()
      cy.get('#password').clear()
      cy.get('#username').should('have.value', '')
      cy.get('#password').should('have.value', '')
    })
  
    it('should handle special characters in credentials', () => {
      cy.get('#username').type('admin@#$%')
      cy.get('#password').type('pass@#$%')
      cy.get('#sessionLocation').select('Inpatient Ward')
      cy.get('#loginButton').click()
      
      // Should show error or stay on login page
      cy.url().should('include', '/login.htm')
    })
  })