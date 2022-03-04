import React from "react";
import { render } from "@testing-library/react";
import If from "../If";

describe("<If />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<If condition={false} otherwise={<div>Should render</div>} />);
    expect(baseElement).toMatchSnapshot();
  });
});
