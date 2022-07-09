import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ship from './Ship';
import userEvent from '@testing-library/user-event';

describe('Testing Ship component', () => {
    it("renders correct size ship", () => {
        render(<Ship length={3}/>);

        const ship = screen.getByTestId('ship');

        expect(ship.childNodes.length).toBe(3);
    });

    it("renders hit icon when ship is hit", () => {
        render(<Ship length={3} />);

        const firstCompartment = screen.getAllByTestId('compartment')[0];
        userEvent.click(firstCompartment);

        expect(firstCompartment).toContainElement(screen.getByAltText("hit"));

    })
})