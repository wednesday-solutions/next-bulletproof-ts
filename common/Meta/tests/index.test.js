/**
 *
 * Tests for Meta
 *
 */

import React from 'react';
import { renderProvider } from '@utils/testUtils';
import Meta from '../index';

describe('<Meta />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<Meta />);
    expect(baseElement).toMatchSnapshot();
  });
});
