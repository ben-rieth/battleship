import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';

describe("Testing Board Component", () => {
    it("renders 100 board squares and five ships", () => {
        render(<Board />);

        const squares = screen.getAllByTestId('square');
        const ships = screen.getAllByTestId('ship');

        expect(squares.length).toBe(100);
        expect(ships.length).toBe(5);
    });


})