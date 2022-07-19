///<reference types="cypress" />

describe.skip('Test Placement Mode', () => {
  it('allows a player to move their ships in placement mode', () => {
    cy.visit("http://localhost:3000/game/one-device");

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
});

describe("Test Playing Mode", () => {
  function attackTurn(boardId: number, x: number, y: number, shouldBe: "hit" | "miss") {
    cy.get(`[data-testid="square-${boardId}-${y}-${x}"]`).click();
    cy.get('[data-cy="attack-btn"]').click();

    cy.get(`[data-testid="square-${boardId}-${y}-${x}"]`).children('img').should('have.attr', 'alt', shouldBe);
  }

  it("allows user to play against another human player", () => {
    cy.visit("http://localhost:3000/game/one-device");

    //skip setup and positioning ships, ships will be in default positions for this game
    cy.contains('Done Placing Ships').click();
    cy.contains('Place Your Ships').click();
    cy.contains('Done Placing Ships').click();
    cy.get('[data-cy="attack-btn"]').as('attack').click();

    attackTurn(2, 1, 0, "hit");
    attackTurn(1, 3, 0, "miss");
    
    attackTurn(2, 0, 0, "hit"); //sinks player 2's destroyer
    attackTurn(1, 7, 8, "hit");

    attackTurn(2, 3, 3, "miss");
    attackTurn(1, 7, 7, "miss");

    attackTurn(2, 6, 5, "hit");
    attackTurn(1, 8, 8, "miss");

    attackTurn(2, 6, 6, "hit");
    attackTurn(1, 6, 8, "hit");

    attackTurn(2, 6, 7, "miss");
    attackTurn(1, 5, 8, "hit"); //sinks player 1's submarine

    attackTurn(2, 6, 4, "hit");
    attackTurn(1, 2, 6, "miss" );

    attackTurn(2, 6, 3, "hit");
    attackTurn(1, 8, 1, "miss");

    attackTurn(2, 6, 2, "hit"); //sinks player 2's carrier
    attackTurn(1, 0, 8, "hit");

    attackTurn(2, 2, 7, "miss");
    attackTurn(1, 0, 9, "hit");

    attackTurn(2, 9, 0, "miss");
    attackTurn(1, 0, 7, "hit");

    attackTurn(2, 8, 6, "miss");
    attackTurn(1, 0, 6, "hit"); //sinks player 1's battleship

    attackTurn(2, 1, 2, "miss");
    attackTurn(1, 5, 2, "miss"); 

    attackTurn(2, 7, 8, "hit");
    attackTurn(1, 0, 0, "hit");

    attackTurn(2, 6, 8, "hit");
    attackTurn(1, 1, 0, "hit"); //sinks player 1's destroyer

    attackTurn(2, 5, 8, "hit"); //sinks player 2's submarine
    attackTurn(1, 1, 2, "miss");

    attackTurn(2, 2, 4, "hit");
    attackTurn(1, 9, 5, "miss");

    attackTurn(2, 3, 4, "hit");
    attackTurn(1, 8, 5, "miss");

    attackTurn(2, 4, 4, "hit"); //sinks player 2's cruiser
    attackTurn(1, 5, 5, "miss");

    attackTurn(2, 0, 9, "hit");
    attackTurn(1, 2, 9, "miss");

    attackTurn(2, 0, 8, "hit");
    attackTurn(1, 4, 9, "miss");

    attackTurn(2, 0, 7, "hit");
    attackTurn(1, 6, 9, "miss");

    cy.get(`[data-testid="square-${2}-${6}-${0}"]`).click(); //sinks player 2's battleship, winning the game
    
    //check to make sure modal displays correct information
    cy.contains('Player 2 has won!');
    cy.contains('button', 'New Game');
    cy.contains('button', 'Rematch');
    
  })
});

export {};