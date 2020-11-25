import React from 'react';
import { render } from 'react-native-testing-library';
import HomeScreen from '../src/screens/HomeScreen';

test("HomeScreen renders consistently", () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toMatchSnapshot();
});