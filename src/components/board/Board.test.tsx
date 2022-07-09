import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Board from './Board';

describe("Testing Board Component", () => {
    it("renders all board squares", () => {
        render(<Board />);

        const board = screen.getByRole('main');

        expect(board.childNodes.length).toBe(100);
    })
})