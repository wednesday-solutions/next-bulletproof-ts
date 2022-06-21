import React from "react";
import { render } from "@utils/testUtils";
import ErrorState from "../index";

describe("<ErrorState />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<ErrorState />);
    expect(baseElement).toMatchSnapshot();
  });
});
