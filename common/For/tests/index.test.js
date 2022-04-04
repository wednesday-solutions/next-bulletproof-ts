/**
 *
 * Tests for For
 *
 */

import React from "react";
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from "@utils/testUtils";
import For from "../index";

describe("<For />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = renderWithIntl(<For />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 For component", () => {
    const { getAllByTestId } = renderWithIntl(<For />);
    expect(getAllByTestId("for").length).toBe(1);
  });
});
