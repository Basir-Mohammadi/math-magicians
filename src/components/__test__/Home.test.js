import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders to match the test', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
