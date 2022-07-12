import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';
import userEvent from '@testing-library/user-event';

describe("Testing Board Component", () => {
    it("renders 100 board squares and five ships", () => {
        render(<Board mode="place" showShips={true} id={1} canInteract={true}/>);

        const squares = screen.getAllByTestId('square', {exact: false});
        const ships = screen.getAllByTestId('ship', {exact: false});

        expect(squares.length).toBe(100);
        expect(ships.length).toBe(5);
    });

    it("does not render ships when showShips is false", () => {
        render(<Board mode="place" showShips={false} id={1} canInteract={true}/>);

        const ships = screen.queryAllByTestId("ship");

        expect(ships.length).toBe(0);
    });

    it("does not process misses in placing mode", () => {
        render(<Board mode="place" showShips={false} id={1} canInteract={true}/>);

        const squareX4Y0 = screen.getByTestId('square-1-0-4');
        const missIconX4Y0 = screen.queryByTestId('miss-1-0-4');

        expect(squareX4Y0).not.toContainElement(missIconX4Y0);
        userEvent.click(squareX4Y0);

        expect(squareX4Y0).toContainHTML("<div></div>");
        expect(squareX4Y0).not.toContainElement(missIconX4Y0);

    });

    it("displays miss icon when square clicked in play mode", () => {
        render(<Board mode="play" showShips={false} id={1} canInteract={true}/>);

        const squareX4Y0 = screen.getByTestId('square-1-0-4');

        expect(squareX4Y0).toContainHTML("<div></div>");
        userEvent.click(squareX4Y0);

        expect(squareX4Y0).toContainElement(screen.getByTestId('miss-1-0-4'));
    });

    it("does not process hits in placing mode", () => {
        render(<Board mode="place" showShips={false} id={1} canInteract={true}/>);

        const squareX0Y0 = screen.getByTestId('square-1-0-0');
        const hitIconX0Y0 = screen.queryByTestId('hit-1-0-0');

        expect(squareX0Y0).not.toContainElement(hitIconX0Y0);
        userEvent.click(squareX0Y0);

        expect(squareX0Y0).toContainHTML("<div></div>");
        expect(squareX0Y0).not.toContainElement(hitIconX0Y0);
    });
})