class PatientRegistrationPage {
    elements = {
      givenNameField: 'input[name="givenName"]',
      familyNameField: 'input[name="familyName"]',
      genderMale: 'input[value="Male"]',
      genderFemale: 'input[value="Female"]',
      birthdateDay: '#birthdateDay',
      birthdateMonth: '#birthdateMonth',
      birthdateYear: '#birthdateYear',
      address1Field: 'input[name="address1"]',
      nextButton: '#next-step',
      submitButton: '#submit',
      confirmButton: '#confirmation',
      patientName: '.PersonName'
    }
    
    enterGivenName(name) {
      cy.get(this.elements.givenNameField).clear().type(name)
      return this
    }
    
    enterFamilyName(name) {
      cy.get(this.elements.familyNameField).clear().type(name)
      return this
    }
    
    selectGender(gender) {
      if (gender.toLowerCase() === 'male') {
        cy.get(this.elements.genderMale).click()
      } else {
        cy.get(this.elements.genderFemale).click()
      }
      return this
    }
    
    enterBirthdate(day, month, year) {
      cy.get(this.elements.birthdateDay).clear().type(day)
      cy.get(this.elements.birthdateMonth).select(month)
      cy.get(this.elements.birthdateYear).clear().type(year)
      return this
    }
    
    clickNext() {
      cy.get(this.elements.nextButton).click()
      return this
    }
    
    enterAddress(address) {
      cy.get(this.elements.address1Field).clear().type(address)
      return this
    }
    
    submit() {
      cy.get(this.elements.submitButton).click()
      return this
    }
    
    confirm() {
      cy.get(this.elements.confirmButton).click()
      return this
    }
    
    verifyPatientCreated(patientName) {
      cy.get(this.elements.patientName).should('contain', patientName)
      return this
    }
  }
  
  export default PatientRegistrationPage