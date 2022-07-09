import React from 'react';
import { render, screen } from '@testing-library/react';
import Ship from './Ship';

describe('Testing Ship component', () => {
    it("renders correct size ship", () => {
        render(<Ship length={3}/>);

        const ship = screen.getByTestId('ship');

        expect(ship.childNodes.length).toBe(3);
    })
})