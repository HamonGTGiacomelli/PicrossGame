import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    background-color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 8px 10px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 8px 10px 0px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 8px 10px 0px rgba(50, 50, 50, 0.75);
`;

const Card: React.FunctionComponent = ({ children }) => {
    return <CardStyle>{children}</CardStyle>;
};

export default Card;
