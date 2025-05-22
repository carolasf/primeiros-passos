import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM Tests', () => {

  const selectorsList = {
    
   
  }

  it('User - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('FirstName', 'LastName')
    myInfoPage.fillEmployeeDetails('123456', '654321', 'Drivers Number', '2023-10-01')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()


    /*cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.genericComboBox).eq(0).should('be.visible')
    cy.get('.oxd-select-dropdown').contains('Algerian').click()*/
    
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkLoginError()
  })   
})