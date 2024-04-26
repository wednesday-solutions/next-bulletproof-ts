/**
 *
 * For
 *
 */

import React from "react";
import { styled } from "@mui/material/styles";

const FlexContainer = styled("div")<{ orientation: "row" | "column" }>`
  display: flex;
  flex-direction: ${props => props.orientation};
`;

interface ForProps<TListItem, TParent extends React.FC> {
  of: TListItem[];
  parentProps?: React.ComponentProps<TParent>;
  noParent?: boolean;
  ParentComponent?: TParent;
  renderItem: (item: TListItem, index: number) => React.ReactElement;
  orientation?: "row" | "column";
}

const For = ({
  of,
  parentProps,
  ParentComponent = FlexContainer,
  renderItem,
  noParent,
}: ForProps<typeof of[0], typeof ParentComponent>) => {
  const renderList = () => of.map((item, index) => ({ ...renderItem(item, index), key: index }));

  const renderChildren = () => (
    <ParentComponent {...parentProps} data-testid="for">
      {renderList()}
    </ParentComponent>
  );

  const renderWithoutParent = () => (of || []).length ? renderList() : null;

  if (noParent) {
    return renderWithoutParent();
  }

  return renderChildren();
};

For.defaultProps = {
  orientation: "row",
};

export default For;
