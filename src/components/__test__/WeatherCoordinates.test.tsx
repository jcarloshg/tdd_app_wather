import {render} from '@testing-library/react-native';
import React from 'react';
import WeatherCoordinates from '../WeatherCoordinates';

describe('first', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});
