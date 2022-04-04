import React, { PropsWithChildren, ReactNode } from "react";

interface Props {
  otherwise?: ReactNode;
  condition: any;
}

const If = (props: PropsWithChildren<Props>) => {
  if (props.condition) return <>{props.children}</>;
  return <>{props.otherwise || null}</>;
};

export default If;
