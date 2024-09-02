import React from "react";
import { render } from "@testing-library/react";
import { Container } from "../index";

describe("<Container/>", () => {
  const props = {
    maxwidth: 10,
    padding: 10,
  };

  it("should ensure it match the snapshot", () => {
    const { baseElement } = render(<Container {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
