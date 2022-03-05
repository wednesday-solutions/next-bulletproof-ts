/**
 *
 * Tests for ErrorState
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderProvider } from '@utils/testUtils';
import ErrorState from '../index';

describe('<ErrorState />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<ErrorState />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 ErrorState component', () => {
    const { getAllByTestId } = renderProvider(<ErrorState repoError="failure" />);
    expect(getAllByTestId('error-state').length).toBe(1);
  });
});
