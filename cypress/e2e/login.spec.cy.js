import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/users/userData.json'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => { 

  it('Login - Fail', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkLoginError()
  })   

  it('Login - Success', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })   
})