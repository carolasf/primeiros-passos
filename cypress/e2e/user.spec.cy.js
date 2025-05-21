import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    genericComboBox: '.oxd-select-text--arrow',
    submitButton: "[type='submit']",
  }

  it.only('User - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList. dateCloseButton).click()
    /*cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.genericComboBox).eq(0).should('be.visible')
    cy.get('.oxd-select-dropdown').contains('Algerian').click()*/
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.genericComboBox).eq(1).should('be.visible')
    cy.get('.oxd-select-dropdown').contains('Single').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })   
})