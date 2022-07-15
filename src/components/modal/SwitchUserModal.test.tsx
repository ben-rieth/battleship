import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SwitchUserModal from './SwitchUserModal';
import PlacementModeModalContent from './PlacementModeModalContent';
import PlayModeModalContent from './PlayModeModalContent';

describe("Testing SwitchUserModal Component", () => {
    it("renders correct button text in placement mode", () => {
        render(<SwitchUserModal 
                isOpen={true} 
                content={<PlacementModeModalContent handleBtnPress={jest.fn()}/>} />);

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent("Place Your Ships");
    });

    it("renders correct button text in play mode", () => {
        render(<SwitchUserModal 
                isOpen={true} 
                content={<PlayModeModalContent handleBtnPress={jest.fn()}/>} />);

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent("Attack!");
    });
})