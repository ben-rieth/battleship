import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from './Switch';
import userEvent from '@testing-library/user-event';

describe("Testing Switch component", () => {
    it("renders two buttons with provided text", () => {
        render(<Switch leftBtnText='left' rightBtnText='right'/>);

        const buttons = screen.getAllByRole('button');

        expect(buttons.length).toBe(2);

        expect(buttons[0]).toHaveTextContent("left");
        expect(buttons[1]).toHaveTextContent("right");
    });

    it("renders the left btn as the default selected button", () => {
        render(<Switch leftBtnText='left' rightBtnText='right'/>);

        const leftBtn = screen.getByText("left");
        const rightBtn = screen.getByText("right");

        expect(leftBtn).toHaveClass('bg-sky-800');
        expect(rightBtn).toHaveClass('bg-slate-400');
    })

    it("switches background colors when clicked", () => {
        render(<Switch leftBtnText='left' rightBtnText='right'/>);

        const leftBtn = screen.getByText("left");
        const rightBtn = screen.getByText("right");

        userEvent.click(rightBtn);

        expect(rightBtn).toHaveClass('bg-sky-800');
        expect(leftBtn).toHaveClass('bg-slate-400');
    });
})