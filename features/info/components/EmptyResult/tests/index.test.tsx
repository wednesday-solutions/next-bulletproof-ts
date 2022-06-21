import React from "react";
import { render } from "@utils/testUtils";
import EmptyResult from "../index";

describe("<EmptyResult />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<EmptyResult />);
    expect(baseElement).toMatchSnapshot();
  });
});
