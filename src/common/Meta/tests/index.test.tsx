/**
 *
 * Tests for Meta
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import Meta from "../index";

describe("<Meta />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<Meta title="Hello World" description="Basic Programming" />);
    expect(baseElement).toMatchSnapshot();
  });
});
