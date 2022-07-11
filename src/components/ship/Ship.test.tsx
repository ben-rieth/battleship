import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ship from './Ship';

describe('Testing Ship component', () => {
    it("renders correct size ship", () => {
        render(<Ship ship = {{
            id: 1,
            length: 3,
            type: "Destroyer",
            color: "red",
            currentDirection: "vertical",
            boardX: 0,
            boardY: 0,
            status: [0, 0, 0],
            error: false
        }}/>);

        const ship = screen.getByTestId('ship');

        expect(ship.childNodes.length).toBe(3);
    });

    it("renders ship horizontally if direction is horizontal", () => {
        render(<Ship ship = {{
            id: 1,
            length: 2,
            type: "Destroyer",
            color: "red",
            currentDirection: "horizontal",
            boardX: 0,
            boardY: 0,
            status: [0, 0],
            error: false
        }}/>);

        const ship = screen.getByTestId('ship');

        expect(ship).toHaveClass('flex');
    });

    it("renders ship vertically if direction is vertical", () => {
        render(<Ship ship = {{
            id: 1,
            length: 2,
            type: "Destroyer",
            color: "red",
            currentDirection: "vertical",
            boardX: 0,
            boardY: 0,
            status: [0, 0],
            error: false
        }}/>);

        const ship = screen.getByTestId('ship');

        expect(ship).not.toHaveClass('flex');
    })

})