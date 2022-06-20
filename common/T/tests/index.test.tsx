/**
 *
 * Tests for T
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import T from "../index";

describe("<T />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<T />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 T component", () => {
    const { getAllByTestId } = render(<T />);
    expect(getAllByTestId("t").length).toBe(1);
  });
});
