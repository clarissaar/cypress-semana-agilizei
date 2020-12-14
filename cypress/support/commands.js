// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0k5SEh8PmnLVKdtc8ESnWSkiMLp5lu6scEV3lS0kEiV06EAhWt%2BH0cZFOHc8sZLFYba4TmqmlfBNNy23%2FsrOKss54uWRCncp0%2FSMKqx0azrmiKKqkpZO%2Br8TitFpMH%2FSjRSpx0O2tTTMA4grVjGT5ArDakGmuegFR6xRwXhcjqaZ%2B4hmQNdLGvqAgLY8c9i3fegGbjurXm34yS39gcRMJiRRTSv5uiP35fqMLaSz0%2FpLbyuN46SIpwnM1lhYZU1cuWJE3qJM2awv4%2FRrrhhfuwhZQb0ZiCuwndtHI6oAKdMChZzIRGvhvMA5xoHdRQWm2MZo8Q0Ix1s6Uyi8wn6MA51gE6INcs2jEFTTPRAXm7fy000286'
    )
    })
