import React from 'react';
import SkewedCard from './SkewedCard';

import renderer from 'react-test-renderer';

test('SkewedCard renders correctly', () => {
  const tree = renderer.create(<SkewedCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
