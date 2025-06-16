class LoginPage {
    elements = {
      usernameField: '#username',
      passwordField: '#password',
      locationDropdown: '#sessionLocation',
      loginButton: '#loginButton',
      errorMessage: '.error'
    }
    
    visit() {
      cy.visit('/login.htm')
      return this
    }
    
    enterUsername(username) {
      cy.get(this.elements.usernameField).clear().type(username)
      return this
    }
    
    enterPassword(password) {
      cy.get(this.elements.passwordField).clear().type(password)
      return this
    }
    
    selectLocation(location) {
      cy.get(this.elements.locationDropdown).select(location)
      return this
    }
    
    clickLogin() {
      cy.get(this.elements.loginButton).click()
      return this
    }
    
    login(username, password, location) {
      return this.enterUsername(username)
                 .enterPassword(password)
                 .selectLocation(location)
                 .clickLogin()
    }
    
    verifyErrorMessage() {
      cy.get(this.elements.errorMessage).should('be.visible')
      return this
    }
  }
  
  export default LoginPage