/**
 *
 * Tests for ErrorState
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import ErrorState from "../index";

describe("<ErrorState />", () => {
  const props = {
    intl: {},
    loading: false,
    reposData: undefined,
    reposError: undefined,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<ErrorState {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 ErrorState component", () => {
    const { getAllByTestId } = render(<ErrorState {...props} />);
    expect(getAllByTestId("error-state").length).toBe(1);
  });
});
