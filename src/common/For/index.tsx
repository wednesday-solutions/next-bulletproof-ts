/**
 *
 * For
 *
 */

import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div<{ orientation: "row" | "column" }>`
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
  const list = () => of.map((item, index) => ({ ...renderItem(item, index), key: index }));
  const children = () => (
    <ParentComponent {...parentProps} data-testid="for">
      {list()}
    </ParentComponent>
  );
  if (noParent) {
    return (of || []).length ? list() : null;
  }
  return (of || []).length ? children() : null;
};

For.defaultProps = {
  orientation: "row",
};

export default For;
