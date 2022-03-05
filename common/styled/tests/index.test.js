import React from 'react';
import { Container } from '../index';
import { render } from '@testing-library/react';

describe('<Container/>', () => {
  it('should ensure it match the snapshot', () => {
    const { Element } = render(<Container />);
    expect(Element).toMatchSnapshot();
  });
});
