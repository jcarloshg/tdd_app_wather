import React from 'react';
// import {jest} from '@jest/globals';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  test('should render correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      // don't forget -> import {jest} from '@jest/globals';
      jest.useFakeTimers();
      //   jest.setSystemTime(946684800000); // Saturday, 01 January 2000 00:00 UTC // video 12 - Creating Home Screen
      jest.setSystemTime(946750000000); // Saturday, 01 January 2000 00:00 UTC
    });

    test('should contain current date', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Jan 01, 2000');
    });

    test('should contain current day', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Saturday');
    });

    afterEach(() => {
      jest.useRealTimers();
    });
  });
});
