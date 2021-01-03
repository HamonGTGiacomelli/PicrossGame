import React from "react";
import styled from "styled-components";
import { GAME_STATE } from "../../types";

interface GameBoardCellProps {
  backgroundColor: string;
  state: GAME_STATE;
  row: number;
  column: number;
  onCellClicked(row: number, column: number): void;
}

interface CellProps {
  bgColor: string;
}

const Cell = styled.div<CellProps>`
  background-color: ${(props) => props.bgColor};
  border: 1px solid black;
`;

const GameBoardCell: React.FunctionComponent<GameBoardCellProps> = ({
  backgroundColor,
  state,
  row,
  column,
  onCellClicked,
}) => {
  return (
    <Cell
      bgColor={state === GAME_STATE.HIT ? backgroundColor : "#FFFFFF"}
      onClick={() => {
        onCellClicked(row, column);
      }}
    >
      {state === GAME_STATE.MISS ? "X" : ""}
    </Cell>
  );
};

export default GameBoardCell;
