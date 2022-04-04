/**
 *
 * Tests for Recommended
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderProvider } from '@utils/testUtils';
import Recommended from '../index';

describe('<Recommended />', () => {
  const recommendations = [
    {
      name: 'test repo name',
      id: 1
    }
  ];
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<Recommended {...{ recommendations }} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Recommended component', () => {
    const { getAllByTestId } = renderProvider(<Recommended {...{ recommendations }} />);
    expect(getAllByTestId('recommended').length).toBe(1);
  });
});
