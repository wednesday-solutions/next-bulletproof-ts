/**
 *
 * Tests for RepoList
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderProvider } from '@utils/testUtils';
import RepoList from '../index';

describe('<RepoList />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<RepoList loading />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 RepoList component', () => {
    const { getAllByTestId } = renderProvider(<RepoList loading />);
    expect(getAllByTestId('repo-list').length).toBe(1);
  });
});
