import { ReactNode } from "react";

interface IfProps {
  children: React.ReactNode;
  otherwise?: ReactNode;
  condition: any;
}

const If: React.FC<IfProps> = props => {
  return <>{props.condition ? props.children : props.otherwise}</>;
};

export default If;
