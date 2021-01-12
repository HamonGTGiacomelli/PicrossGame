import { GameBoardType } from "../types";
import { createNewArray } from "./array";

export interface GameEditor {
    board: GameBoardType;
    rowTips: number[][];
    columnTips: number[][];
}

export const newGameEditorInstance = (rowLength: number, columnLength: number): GameEditor => {
    return {
        board: createNewArray<string>(rowLength, columnLength, ""),
        rowTips: new Array(rowLength).fill([]),
        columnTips: new Array(columnLength).fill([]),
    };
};

export const setBoardValue = (gameEditor: GameEditor, row: number, column: number, value: string): GameEditor => {
    const board = gameEditor.board;
    board[row][column] = value;
    const [rowTips, columnTips] = calculateRowColTips(board);
    return {
        ...gameEditor,
        board,
        rowTips,
        columnTips,
    };
};

const calculateRowColTips = (gameboard: GameBoardType): [number[][], number[][]] => {
    const rowTips: number[][] = new Array(gameboard.length).fill([]).map((row) => []);
    const columnTips: number[][] = new Array(gameboard[0].length).fill([]).map((col) => []);

    const rowAux = new Array(gameboard.length).fill(0);
    const colAux = new Array(gameboard[0].length).fill(0);

    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard[i].length; j++) {
            if (gameboard[i][j]) {
                rowAux[i] = rowAux[i] + 1;
                colAux[j] = colAux[j] + 1;
            } else {
                if (rowAux[i] > 0) {
                    rowTips[i].push(rowAux[i]);
                    rowAux[i] = 0;
                }
                if (colAux[j] > 0) {
                    columnTips[j].push(colAux[j]);
                    colAux[j] = 0;
                }
            }
        }
    }

    rowAux.forEach((row, index) => {
        if (row > 0) {
            rowTips[index].push(row);
        }
    });

    colAux.forEach((col, index) => {
        if (col > 0) {
            columnTips[index].push(col);
        }
    });

    return [rowTips, columnTips];
};
