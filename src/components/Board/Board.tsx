import React from "react";
import styled from "styled-components";
import { GameBoardType } from "../../types";
import BoardGrid from "./BoardGrid";
import ColumnTips from "./ColumnTips";
import RowTips from "./RowTips";

interface Props {
    board: GameBoardType;
    onClickCellAction(row: number, column: number): void;
    rowTips: number[][];
    columnTips: number[][];
}

const BoardStyle = styled.div`
    display: grid;
    grid-template-areas:
        "rowTips boardGrid"
        "none columnTips";
`;

const Board: React.FunctionComponent<Props> = ({ board, onClickCellAction, rowTips, columnTips }) => {
    return (
        <BoardStyle>
            <RowTips rowTips={rowTips}></RowTips>
            <ColumnTips columnTips={columnTips}></ColumnTips>
            <BoardGrid board={board} onClickCellAction={onClickCellAction}></BoardGrid>
        </BoardStyle>
    );
};

export default Board;
