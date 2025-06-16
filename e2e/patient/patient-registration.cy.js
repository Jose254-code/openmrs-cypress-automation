import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'
import PatientRegistrationPage from '../../support/pages/PatientRegistrationPage'

describe('Patient Registration', () => {
  let loginPage
  let homePage
  let patientRegPage
  
  beforeEach(() => {
    loginPage = new LoginPage()
    homePage = new HomePage()
    patientRegPage = new PatientRegistrationPage()
    
    // Login before each test
    cy.login()
  })
  
  it('should register a new male patient', () => {
    cy.fixture('patients').then((patients) => {
      const patient = patients.validPatient
      
      homePage.clickApp('Register a patient')
      
      patientRegPage.enterGivenName(patient.givenName)
                   .enterFamilyName(patient.familyName)
                   .selectGender(patient.gender)
                   .enterBirthdate(patient.birthdate.day, 
                                  patient.birthdate.month, 
                                  patient.birthdate.year)
                   .clickNext()
                   .enterAddress(patient.address)
                   .clickNext()
                   .submit()
                   .confirm()
                   .verifyPatientCreated(patient.givenName)
    })
  })
  
  it('should register a new female patient', () => {
    cy.fixture('patients').then((patients) => {
      const patient = patients.femalePatient
      
      homePage.clickApp('Register a patient')
      
      patientRegPage.enterGivenName(patient.givenName)
                   .enterFamilyName(patient.familyName)
                   .selectGender(patient.gender)
                   .enterBirthdate(patient.birthdate.day, 
                                  patient.birthdate.month, 
                                  patient.birthdate.year)
                   .clickNext()
                   .enterAddress(patient.address)
                   .clickNext()
                   .submit()
                   .confirm()
                   .verifyPatientCreated(patient.givenName)
    })
  })
  
  it('should validate required fields in patient registration', () => {
    homePage.clickApp('Register a patient')
    patientRegPage.clickNext()
    
    // Verify validation messages appear
    cy.get('.error').should('be.visible')
  })
})