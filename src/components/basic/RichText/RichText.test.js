import React from 'react';
import RichText from './RichText';

import renderer from 'react-test-renderer';

test('RichText renders correctly', () => {
  const tree = renderer.create(<RichText />).toJSON();
  expect(tree).toMatchSnapshot();
});
