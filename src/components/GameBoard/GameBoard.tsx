import React, { useState } from "react";
import styled from "styled-components";
import { GameBoardStatusType, GameBoardType, GAME_STATE } from "../../types";
import { createNewArray } from "../../Util/array";
import { calculateRowColTips } from "../../Util/game";
import Cell from "./Cell";
import ColumnTips from "./ColumnTips";

interface Props {
  gameboard: GameBoardType;
  gameboardStatus: GameBoardStatusType;
}

interface GameBoardStyleProps {
  rowNum: number;
  colNum: number;
}

const GameBoardStyle = styled.div<GameBoardStyleProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.colNum}, 50px [col-start]);
  grid-template-rows: repeat(${(props) => props.rowNum}, 50px [row-start]);
  grid-template-areas: "none coltips"
                            "coltips board";
`;

const CellRowTip = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const GameBoard: React.FunctionComponent<Props> = ({
  gameboard,
  gameboardStatus,
}) => {
  const [currentGame, setCurrentGame] = useState<GAME_STATE[][]>(
    createNewArray(gameboard.length, gameboard[0].length, GAME_STATE.HIDDEN)
  );
  const [rowTips, colTips] = calculateRowColTips(gameboard);

  const onCellClicked = (row: number, col: number) => {
    let newArray = [...currentGame];
    if (gameboard[row][col]) {
      newArray[row][col] = GAME_STATE.HIT;
    } else {
      newArray[row][col] = GAME_STATE.MISS;
    }
    setCurrentGame(newArray);
  };

  return (
    <GameBoardStyle
      rowNum={gameboard.length + 1}
      colNum={gameboard[0].length + 1}
    >
      <ColumnTips columnTips={colTips} />
      {currentGame.map((row, rowIndex) => {
        return row.map((item, colIndex) => {
          return (
            <>
              {colIndex === 0 ? (
                <CellRowTip key={`rowTip_${rowIndex}`}>
                  {rowTips[rowIndex].join(" ")}
                </CellRowTip>
              ) : null}
              <Cell
                key={`cell_${rowIndex}_${colIndex}`}
                onCellClicked={onCellClicked}
                backgroundColor={gameboard[rowIndex][colIndex]!}
                column={colIndex}
                row={rowIndex}
                state={currentGame[rowIndex][colIndex]}
              />
            </>
          );
        });
      })}
    </GameBoardStyle>
  );
};

export default GameBoard;
