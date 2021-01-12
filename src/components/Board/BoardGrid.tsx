import React, { useState } from "react";
import styled from "styled-components";
import { GameBoardType } from "../../types";

interface Props {
    board: GameBoardType;
    onClickCellAction(row: number, column: number): void;
}

interface BoardGridStyleProps {
    rowLength: number;
    columnLength: number;
}

const BoardGridStyle = styled.div<BoardGridStyleProps>`
    grid-area: boardGrid;
    display: grid;
    grid-template-rows: repeat(${(props) => props.rowLength}, 20px [col-start]);
    grid-template-columns: repeat(${(props) => props.columnLength}, 20px [row-start]);
`;

interface GridCellStyle {
    backgroundColor: string | null;
}

const GridCell = styled.div<GridCellStyle>`
    height: 20px;
    width: 20px;
    border: 1px solid black;
    background-color: ${(props) => props.backgroundColor};
`;

const BoardGrid: React.FunctionComponent<Props> = ({ board, onClickCellAction }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);

    return (
        <BoardGridStyle rowLength={board.length} columnLength={board[0].length}>
            {board.map((columnItems, rowIndex) => {
                return columnItems.map((item, columnIndex) => {
                    return (
                        <GridCell
                            backgroundColor={item}
                            onMouseOver={(event) => {
                                if (isMouseDown) {
                                    onClickCellAction(rowIndex, columnIndex);
                                }
                            }}
                            onClick={() => {
                                onClickCellAction(rowIndex, columnIndex);
                            }}
                            onMouseDown={() => {
                                setIsMouseDown(true);
                            }}
                            onMouseUp={() => {
                                setIsMouseDown(false);
                            }}
                        />
                    );
                });
            })}
        </BoardGridStyle>
    );
};

export default BoardGrid;
