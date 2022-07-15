import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SwitchUserModal from './SwitchUserModal';

describe("Testing SwitchUserModal Component", () => {
    it("renders", () => {
        render(<SwitchUserModal isOpen={true} onClose={jest.fn()} />);
    })
})