/* eslint-disable no-undef */
/// <reference types="Cypress" />
describe("My frist test case", function () {
    it("My first case", function () {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000/');
        cy.wait(2000);
        // cy.get('.product-card-container:visible').should('have.length.lessThan', 5);
        // cy.get('.menu-item').should('have.length.above', 3);
        cy.visit('http://localhost:3000/shop');
        

        cy.get('#filled-keyword-desk').type('jean');
        const $element = Cypress.$('.product-card-container');
        cy.wrap($element).each(($ele, index, $list) => {
            cy.wrap($ele.find('button')).click();
        });

        cy.get('.product-card-container').eq(0).trigger('mouseover');
        cy.get('.product-card-container').eq(0).find('.button-container').should('be.visible');
        cy.get('.product-card-container').eq(0).find('button').contains('Add cart').click({force: true});
        cy.get('.cart-icon-container').click();
        cy.get('.cart-product-list .cart-item').should('have.length', 1);
        cy.wait(2000);
        cy.get('#cart-dropdown').find('button.button-container').contains('Check out').click();
        cy.get('.col-lg-1 > .MuiButtonBase-root').eq(0).click();
        cy.get('.MuiDialog-container').find('button').contains('Agree').click();
        cy.wait(1000);
        cy.get('.close-dropdown-x').click();
    })
})