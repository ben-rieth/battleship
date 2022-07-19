import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('Testing Home Page Component', () => {
    it("renders 3 mode selection buttons", () => {
        render(<HomePage />);

        const buttons = screen.getAllByRole('button');

        expect(buttons.length).toBe(3);
    })
})