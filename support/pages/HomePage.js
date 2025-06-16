class HomePage {
    elements = {
      logo: '.logo',
      userInfo: '.user-info',
      logoutLink: '.logout',
      apps: '.button.app'
    }
    
    verifyPageLoaded() {
      cy.url().should('include', '/referenceapplication/home.page')
      cy.get(this.elements.logo).should('be.visible')
      return this
    }
    
    clickApp(appName) {
      cy.get(this.elements.apps).contains(appName).click()
      return this
    }
    
    logout() {
      cy.get(this.elements.logoutLink).click()
      return this
    }
    
    verifyUserLoggedIn(username) {
      cy.get(this.elements.userInfo).should('contain', username)
      return this
    }
  }
  
  export default HomePage