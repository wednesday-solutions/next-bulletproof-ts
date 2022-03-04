import React, { PropsWithChildren } from "react";

interface Props {
  otherwise?: React.ReactElement;
  condition: any;
}

const If = (props: PropsWithChildren<Props>) => {
  if (props.condition) return <>{props.children}</>;
  return <>{props.otherwise || null}</>;
};

export default If;
