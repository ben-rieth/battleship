import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GameModeButton from './GameModeButton';
import RobotIcon from './../../assets/images/robot.svg';
import { BrowserRouter } from 'react-router-dom';

describe("Testing GameModeButton component", () => {
    it("renders given header, subtitle, and image", () => {
        render(
            <BrowserRouter>
                <GameModeButton modeName="mode" subtitle="subtitle" imgURL={RobotIcon} linksTo="/"/> 
            </BrowserRouter>
        );

        const img = screen.getByRole('img');

        expect(screen.getByText("mode")).toBeInTheDocument();
        expect(screen.getByText("subtitle")).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'robot.svg');
    })
})