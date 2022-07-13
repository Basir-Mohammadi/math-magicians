import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders when there is item', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
