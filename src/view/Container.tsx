import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  margin-inline: 16px;
`;

const Container: React.FunctionComponent = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
