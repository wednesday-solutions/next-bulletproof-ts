/**
 *
 * Tests for For
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import For from "../index";

describe("<For />", () => {
  const props = {
    of: [{ name: "Something" }],
    noParent: false,
    ParentComponent: () => {
      return <div data-testid="for" />;
    },
    renderItem: (item, idx: number) => <div key={idx}>{item.name}</div>,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<For {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 For component", () => {
    const { getAllByTestId } = render(<For {...props} />);
    expect(getAllByTestId("for").length).toBe(1);
  });
});
