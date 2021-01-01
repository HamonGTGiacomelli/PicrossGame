import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface NavBarItemProps {
    label: string;
    goTo: string;
}

interface NavBarItemStyleProps {
    selected?: boolean;
}

const NavBarItemStyle = styled(Link)<NavBarItemStyleProps>`
    margin-inline: 5px;
    margin-block: 5px;
    padding-block: 5px;
    padding-inline: 5px;
    border-radius: 3px;
    color: ${props => props.selected ? "#000000" : "#FFFFFF"};
    font-weight: ${props => props.selected ? "bold" : null};
    text-decoration: none;
    background-color: ${props => props.selected ? "#98C1D9" : null};
`

const NavBarItem: React.FunctionComponent<NavBarItemProps> = ({label, goTo}) => {

    const path = useLocation().pathname;

    return (<NavBarItemStyle title={label} to={goTo} selected={path === goTo}>
        {label}
    </NavBarItemStyle>)
}

export default NavBarItem
