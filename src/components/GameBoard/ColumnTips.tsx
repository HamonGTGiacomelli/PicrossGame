import React from "react";
import styled from "styled-components";

interface ColumnTipsProps {
  columnTips: number[][];
}

const ColumnTipsStyle = styled.div`
  display: flex;
`;

const ColumnTips: React.FunctionComponent<ColumnTipsProps> = ({
  columnTips,
}) => {
  return (
    <ColumnTipsStyle>
      {columnTips.map((tips) => {
        return <div>{tips}</div>;
      })}
    </ColumnTipsStyle>
  );
};

export default ColumnTips;
