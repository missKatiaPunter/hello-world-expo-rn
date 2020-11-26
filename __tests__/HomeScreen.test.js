import React from 'react';
import { render, debug } from 'react-native-testing-library';
import HomeScreen from '../src/screens/HomeScreen';


describe("the screen renders its text elements", () => {
    it("renders Hello RN text element correctly", () => {
        const { debug, getByText } = render(<HomeScreen />);
        // debug();
        const helloRNText = getByText(/Hello/);
        expect(helloRNText.type.displayName).toBe("Text");
        expect(helloRNText.props.style.fontSize).toBe(30);
    });
    it("renders buttons", () => {
        const { getAllByRole } = render(<HomeScreen />);
        const buttons =  getAllByRole('button');
        console.log(buttons.length);   
        expect(buttons.length).toBe(10);
        // expect(helloRNText.props.style.fontSize).toBe(30);
    });
});