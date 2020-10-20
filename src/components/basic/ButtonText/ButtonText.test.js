import React from 'react';
import ButtonText from './ButtonText';

import renderer from 'react-test-renderer';

test('ButtonText renders correctly', () => {
  const tree = renderer
    .create(<ButtonText title="Details" onPressHandler={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
