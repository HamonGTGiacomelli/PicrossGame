import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  color: #ee6c4d;
`;

const Header: React.FunctionComponent = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
