import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import BoardSquare from './BoardSquare';

describe("Testing Board Component", () => {
    it("renders", () => {
        render(<BoardSquare />);
    })
})