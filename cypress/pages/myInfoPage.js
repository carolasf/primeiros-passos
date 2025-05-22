class MyInfoPage {
    
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            genericComboBox: '.oxd-select-text--arrow',
            submitButton: "[type='submit']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",  
        }

        return selectors
    }
    
    fillPersonalDetails(firstname,lastname) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstname)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)
    }

    fillEmployeeDetails(employeeId,otherId,driversLicense,expireDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expireDate)
        cy.get(this.selectorsList(). dateCloseButton).click() //botão que fecha a caixa de data
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).should('be.visible')
        cy.get('.oxd-select-dropdown').contains('Single').click()   
    }
}

export default MyInfoPage