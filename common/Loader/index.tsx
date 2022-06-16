import { Space, Spin } from "antd";
import React from "react";
import { AlignCenter } from "../styled";

const Loader: React.FC = () => (
  <AlignCenter>
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </AlignCenter>
);

export default Loader;
