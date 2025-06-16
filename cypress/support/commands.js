// Custom commands for OpenMRS automation//
/**
 * Login to OpenMRS with default or custom credentials
 */
Cypress.Commands.add('login', (username, password, location) => {
    const user = username || Cypress.env('username')
    const pass = password || Cypress.env('password')
    const loc = location || Cypress.env('location')
    
    cy.visit('/login.htm')
    cy.get('#username').clear().type(user)
    cy.get('#password').clear().type(pass)
    cy.get('#sessionLocation').select(loc)
    cy.get('#loginButton').click()
    
    // Verify successful login
    cy.url().should('include', '/referenceapplication/home.page')
    cy.get('.logo').should('be.visible')
  })
  
  /**
   * Logout from OpenMRS
   */
  Cypress.Commands.add('logout', () => {
    cy.get('.logout').click()
    cy.url().should('include', '/login.htm')
  })
  
  /**
   * Navigate to a specific app
   */
  Cypress.Commands.add('navigateToApp', (appName) => {
    cy.get('.button.app').contains(appName).click()
  })
  
  /**
   * Search for a patient
   */
  Cypress.Commands.add('searchPatient', (searchTerm) => {
    cy.get('#patient-search').clear().type(searchTerm)
    cy.get('#patient-search-results-table').should('be.visible')
  })
  
  /**
   * Create a new patient with minimal data
   */
  Cypress.Commands.add('createPatient', (patientData) => {
    const defaultData = {
      givenName: 'Test',
      familyName: 'Patient',
      gender: 'Male',
      birthdate: '01/01/1990',
      address: '123 Test Street'
    }
    
    const data = { ...defaultData, ...patientData }
    
    cy.navigateToApp('Register a patient')
    
    // Fill patient demographics
    cy.get('input[name="givenName"]').type(data.givenName)
    cy.get('input[name="familyName"]').type(data.familyName)
    cy.get(`input[value="${data.gender}"]`).click()
    cy.get('#birthdateDay').type(data.birthdate.split('/')[1])
    cy.get('#birthdateMonth').select(data.birthdate.split('/')[0])
    cy.get('#birthdateYear').type(data.birthdate.split('/')[2])
    
    // Continue through registration steps
    cy.get('#next-step').click()
    cy.get('input[name="address1"]').type(data.address)
    cy.get('#next-step').click()
    
    // Complete registration
    cy.get('#submit').click()
    cy.get('.PersonName').should('contain', data.givenName)
  })