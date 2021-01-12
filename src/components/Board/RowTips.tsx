import React from "react";
import styled from "styled-components";

interface Props {
    rowTips: number[][];
}

const RowTipsStyle = styled.div`
    grid-area: rowTips;
    text-align: end;
    min-width: 80px;
`;

const TipsCell = styled.div`
    height: 20px;
    display: flex;
    justify-content: flex-end;
`;

const Tip = styled.div`
    align-items: center;
    margin: 2px;
`;

const RowTips: React.FunctionComponent<Props> = ({ rowTips }) => {
    console.log(rowTips);
    return (
        <RowTipsStyle>
            {rowTips.map((tips) => {
                return (
                    <TipsCell>
                        {tips.map((tip) => {
                            return <Tip>{tip}</Tip>;
                        })}
                    </TipsCell>
                );
            })}
        </RowTipsStyle>
    );
};

export default RowTips;
