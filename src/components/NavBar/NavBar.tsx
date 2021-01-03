import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const NavBarStyle = styled.div`
  display: flex;
  background-color: #3d5a80;
  padding-inline: 16px;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavBarItem label="Home" goTo="/" />
      <NavBarItem label="Create Game" goTo="/create" />
    </NavBarStyle>
  );
};

export default NavBar;
