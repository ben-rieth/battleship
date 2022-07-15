import { createYield } from "typescript";

describe('empty spec', () => {
  it('allows a player to move their ships in placement mode', () => {
    cy.visit("http://localhost:3000/");

    cy
      .get('[data-testid="ship-Cruiser"]')
      .as("cruiser")
      .click()
      .drag('[data-testid="square-1-0-2"]', {force: true})

    cy
      .get('[data-testid="ship-Battleship"]')
      .as("battleship")
      .drag('[data-testid="square-1-5-2"]', {force: true})
      
    cy
      .get('@battleship')
      .drag('[data-testid="square-1-6-2"]', {force: true})

    cy
      .get('[data-testid="ship-Carrier"]')
      .as('carrier')
      .drag('[data-testid="square-1-8-8"]', {force: true})

    cy
      .get("[data-testid='ship-Submarine'")
      .as('sub')
      .drag('[data-testid="square-1-0-8"]', {force: true});

    cy.get("@battleship").click();

    cy
      .get('[data-testid="ship-Destroyer"]')
      .as('destroyer')
      .drag('[data-testid="square-1-9-0"]', {force: true});

    cy.contains('Done Placing Ships').click();
  })
})