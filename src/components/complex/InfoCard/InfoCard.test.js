import React from 'react';
import InfoCard from './InfoCard';

import { cleanup, render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('InfoCard renders correctly', () => {
  const tree = renderer.create(<InfoCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('InfoCard Details button click', () => {
  const { getByTestId } = render(<InfoCard />);
  fireEvent.press(getByTestId('btnGoToDetails'));
  expect(getByTestId('btnGoToDetails')).toBeDefined();
});
