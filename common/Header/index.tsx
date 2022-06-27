import React from "react";
import Layout from "antd/lib/layout";
import styled from "styled-components";
// import { injectIntl } from "react-intl";
import Image from "next/image";
import { fonts, colors } from "@themes";
import { T } from "@common";
import logoImage from "../../public/icons/icon-512x512.png";

const StyledHeader = styled(Layout.Header)`
  && {
    &.ant-layout-header {
      padding: 0 1rem;
      height: 7rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
  }
`;
const Logo = styled.div`
  height: 4rem;
  width: 4rem;
  margin-inline-end: 12px;
`;
const Title = styled(T)`
  && {
    margin-bottom: 0;
    ${fonts.dynamicFontSize(fonts.size.xRegular, 1, 0.5)};
    display: flex;
    align-self: center;
  }
`;

const Header: React.FC = props => {
  return (
    <StyledHeader {...props} data-testid="header">
      <Logo>
        <Image src={logoImage} height={512} width={512} alt="logo image" placeholder="blur" />
      </Logo>
      <Title type="heading" id="wednesday_solutions" />
    </StyledHeader>
  );
};

export default Header;
