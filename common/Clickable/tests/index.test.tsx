/**
 *
 * Tests for Clickable
 *
 */

import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render } from "@utils/testUtils";
import Clickable from "../index";

describe("<Clickable /> component tests", () => {
  let clickSpy = jest.fn();
  beforeEach(() => {
    clickSpy = jest.fn();
  });

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<Clickable onClick={clickSpy} textId="repo_list" />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 Clickable component", () => {
    const { getAllByTestId } = render(<Clickable onClick={clickSpy} textId="repo_list" />);
    expect(getAllByTestId("clickable").length).toBe(1);
  });

  it("should contain render the text according to the textId", () => {
    const { getAllByText } = render(<Clickable onClick={clickSpy} textId="repo_list" />);
    expect(getAllByText(/Repository List/).length).toBe(1);
  });

  it("should call the prop onClick when the clickable component is clicked", () => {
    const { getAllByText, queryByText } = render(
      <Clickable onClick={clickSpy} textId="repo_list" />
    );

    expect(getAllByText(/Repository List/).length).toBe(1);

    const elementToClick = queryByText(/Repository List/);
    if (elementToClick) {
      fireEvent.click(elementToClick);
      expect(clickSpy).toBeCalled();
    }
  });
});
