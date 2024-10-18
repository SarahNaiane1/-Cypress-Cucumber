class HomePage {
    visitPage() {
        cy.visit('/');
        cy.url().should('include', '/');
    }

    btnRegister() {
        cy.contains('strong', 'Cadastre-se para fazer entregas')
        .click();
    }
    RegisterPage() {
        cy.url().should('include', '/deliver');
    }
    logo() {
        cy.get('img[alt="Buger Eats"]')
            .should('be.visible')
            .and('have.attr', 'src')
            .and('not.be.empty');

    }
    titleHome() {
        cy.contains('h1', 'Seja um parceiro entregador pela Buger Eats')
            .should('be.visible')

    }
    text() {
        cy.contains('p', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
            .should('be.visible')
    }
    image() {
        cy.get('div.content').should('be.visible')
    }
}

export default new HomePage();
