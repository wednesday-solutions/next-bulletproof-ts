/**
 *
 * Tests for Clickable
 *
 */

import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { renderProvider } from '@utils/testUtils';
import Clickable from '../index';

describe('<Clickable /> component tests', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<Clickable />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Clickable component', () => {
    const { getAllByTestId } = renderProvider(<Clickable />);
    expect(getAllByTestId('clickable').length).toBe(1);
  });

  it('should contain render the text according to the textId', () => {
    const { getAllByText } = renderProvider(<Clickable textId="repo_list" />);
    expect(getAllByText(/Repository List/).length).toBe(1);
  });

  it('should call the prop onClick when the clickable component is clicked', () => {
    const clickSpy = jest.fn();
    const { getAllByText, queryByText } = renderProvider(<Clickable onClick={clickSpy} textId="repo_list" />);
    expect(getAllByText(/Repository List/).length).toBe(1);
    fireEvent.click(queryByText(/Repository List/));
    expect(clickSpy).toBeCalled();
  });
});
