import React from "react";
import styled from "styled-components";

interface Props {
    columnTips: number[][];
}

const ColumnTipsStyle = styled.div`
    grid-area: columnTips;
    display: flex;
    min-height: 150px;
`;

const TipsCell = styled.div`
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Tip = styled.div`
    text-align: center;
`;

const ColumnTips: React.FunctionComponent<Props> = ({ columnTips }) => {
    return (
        <ColumnTipsStyle>
            {columnTips.map((tips) => {
                return (
                    <TipsCell>
                        {tips.map((tip) => {
                            return <Tip>{tip}</Tip>;
                        })}
                    </TipsCell>
                );
            })}
        </ColumnTipsStyle>
    );
};

export default ColumnTips;
