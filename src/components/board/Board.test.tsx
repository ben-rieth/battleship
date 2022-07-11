import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';

describe("Testing Board Component", () => {
    it("renders 100 board squares and five ships", () => {
        render(<Board mode="place" showShips={true}/>);

        const squares = screen.getAllByTestId('square');
        const ships = screen.getAllByTestId('ship', {exact: false});

        expect(squares.length).toBe(100);
        expect(ships.length).toBe(5);
    });

    it("does not render ships when showShips is false", () => {
        render(<Board mode="place" showShips={false}/>);

        const ships = screen.queryAllByTestId("ship");

        expect(ships.length).toBe(0);
    });
})