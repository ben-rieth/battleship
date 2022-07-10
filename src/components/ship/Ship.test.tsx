import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ship from './Ship';
import userEvent from '@testing-library/user-event';

describe('Testing Ship component', () => {
    it("renders correct size ship", () => {
        render(<Ship ship = {{
            length: 3,
            type: "Destroyer",
            color: "red",
            currentDirection: "vertical",
            boardX: 0,
            boardY: 0,
            status: [0, 0]
        }}/>);

        const ship = screen.getByTestId('ship');

        expect(ship.childNodes.length).toBe(3);
    });

    it("renders ship horizontally if direction is horizontal", () => {
        render(<Ship ship = {{
            length: 2,
            type: "Destroyer",
            color: "red",
            currentDirection: "horizontal",
            boardX: 0,
            boardY: 0,
            status: [0, 0]
        }}/>);

        const ship = screen.getByTestId('ship');

        expect(ship).toHaveClass('flex');
    })

    it.skip("renders hit icon when ship is hit", () => {
        render(<Ship ship = {{
            length: 2,
            type: "Destroyer",
            color: "red",
            currentDirection: "horizontal",
            boardX: 0,
            boardY: 0,
            status: [0, 0]
        }}/>);

        const firstCompartment = screen.getAllByTestId('compartment')[0];
        userEvent.click(firstCompartment);

        expect(firstCompartment).toContainElement(screen.getByAltText("hit"));

    })
})