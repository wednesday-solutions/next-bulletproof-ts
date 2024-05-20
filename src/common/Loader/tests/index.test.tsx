import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../index';

describe('Loader component', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });

  it('renders CircularProgress component', () => {
    const { getByRole } = render(<Loader />);
    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeDefined();
  });
});
