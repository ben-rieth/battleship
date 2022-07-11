import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from './Game';

describe("Testing Game component", () => {
    it("renders", () => {
        render(<Game />)
    })
})