class MenuPage {
    selectorList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",   
            performanceButton: "[[href='/web/index.php/performance/viewPerformanceModule']",
        }

        return selectors
    }

   accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
        //cy.location('pathname').should('equal','/web/index.php/pim/viewMyDetails')


    }
    accessPerformance() {
        cy.get(this.selectorList().performanceButton).click()
        //cy.location('pathname').should('equal','/web/index.php/performance/viewPerformanceModule')
    }
    
}

export default MenuPage