import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { T } from "@common";

const Error = styled.div`
  color: "red";
`;

const ErrorState = () => {
  return (
    <Error>
      <Card>
        <T text="Something went wrong" />
      </Card>
    </Error>
  );
};

export default ErrorState;
