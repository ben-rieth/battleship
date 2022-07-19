import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GameModeButton from './GameModeButton';
import RobotIcon from './../../assets/images/robot.svg';

describe("Testing GameModeButton component", () => {
    it("renders given header, subtitle, and image", () => {
        render(<GameModeButton modeName="mode" subtitle="subtitle" imgURL={RobotIcon}/>);

        const img = screen.getByRole('img');

        expect(screen.getByText("mode")).toBeInTheDocument();
        expect(screen.getByText("subtitle")).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'robot.svg');
    })
})