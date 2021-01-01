import React from 'react'
import styled from 'styled-components'
import NavBarItem from './NavBarItem';

const NavBarStyle = styled.div`
    display: flex;
    background-color: #3D5A80;
`;

const NavBar = () => {
    return <NavBarStyle>
        <NavBarItem label="Home" goTo="/"/>
        <NavBarItem label="Create Game" goTo="/create"/>
    </NavBarStyle>
}

export default NavBar
