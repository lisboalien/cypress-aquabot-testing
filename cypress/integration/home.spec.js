/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://aquabottesting.com/index.html')
})

it('clicks on aquabot logo should reload the page', () => {
    // mark our window object to "know" when it gets reloaded
    cy.window().then(w => w.beforeReload = true)
    // initially the new property is there
    cy.window().should('have.prop', 'beforeReload', true)
    cy.get('.logo-image > img').click()
    // after reload the property should be gone
    cy.window().should('not.have.prop', 'beforeReload')
})

it('clicks on Home button nothing will happen', () => {
    // mark our window object to "know" when it gets reloaded
    cy.window().then(w => w.beforeReload = true)
    // initially the new property is there
    cy.window().should('have.prop', 'beforeReload', true)
    cy.contains('Home').click()
    // after reload the property should stay
    cy.window().should('have.prop', 'beforeReload')
})

it('clicks on Discover button and enters Types of Buttons page', () => {
    cy.get('#discover').click()

    cy.get(':nth-child(1) > .card-title').should('have.text', 'Types of Buttons')
    cy.get('.turquoise > .card-title').should('have.text', 'Types of Links')
})

it('clicks on Buttons & Links button and enters Types of Buttons page', () => {
    cy.contains('Buttons & Links').click()

    cy.get(':nth-child(1) > .card-title').should('have.text', 'Types of Buttons')
    cy.get('.turquoise > .card-title').should('have.text', 'Types of Links')
})