describe('OpenMRS Smoke Tests', () => {
    it('should load the login page', () => {
      cy.visit('/login.htm')
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')
      cy.get('#loginButton').should('be.visible')
      cy.title().should('contain', 'OpenMRS')
    })
    
    it('should allow successful login and logout', () => {
      cy.login()
      cy.url().should('include', '/referenceapplication/home.page')
      cy.logout()
      cy.url().should('include', '/login.htm')
    })
  })
  
  // cypress/e2e/login/login.cy.js
  import LoginPage from '../../support/pages/LoginPage'
  import HomePage from '../../support/pages/HomePage'
  
  describe('Login Functionality', () => {
    let loginPage
    let homePage
    
    beforeEach(() => {
      loginPage = new LoginPage()
      homePage = new HomePage()
    })
    
    it('should login with valid credentials', () => {
      cy.fixture('users').then((users) => {
        loginPage.visit()
                  .login(users.validUser.username, 
                        users.validUser.password, 
                        users.validUser.location)
        
        homePage.verifyPageLoaded()
                .verifyUserLoggedIn(users.validUser.username)
      })
    })
    
    it('should show error with invalid credentials', () => {
      cy.fixture('users').then((users) => {
        loginPage.visit()
                  .login(users.invalidUser.username, 
                        users.invalidUser.password, 
                        users.invalidUser.location)
                  .verifyErrorMessage()
      })
    })
    
    it('should require all fields to be filled', () => {
      loginPage.visit().clickLogin()
      // Verify validation messages
      cy.get('#username').should('have.class', 'error')
    })
    
    it('should logout successfully', () => {
      cy.login()
      homePage.logout()
      cy.url().should('include', '/login.htm')
    })
  })