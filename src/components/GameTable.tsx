import React, { useState } from 'react'
import styled from 'styled-components';
import { createNewArray } from '../Util/array';

interface Props {
    matrix: (string | undefined)[][]
};

interface GameTableStyleProps {
    rowNum: number,
    colNum: number
}

interface CellProps {
    bgColor: string
};

enum GAME_STATE {
    HIDDEN = "HIDDEN",
    HIT = "HIT",
    MISS = "MISS"
}

const GameTableStyle = styled.div<GameTableStyleProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.colNum}, 50px [col-start]);
    grid-template-rows: repeat(${props => props.rowNum}, 50px [row-start]);
`;

const Cell = styled.div<CellProps>`
    background-color: ${props => props.bgColor};
    border: 1px solid black;
`

const CellColTip = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const CellRowTip = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const calculateRowColTips = (matrix: (string | undefined)[][]): [number[][],number[][]] => {

    const rowTips: number[][] = new Array(matrix.length).fill([]).map(row => []);
    const colTips: number[][] = new Array(matrix[0].length).fill([]).map(col => []);

    const rowAux = new Array(matrix.length).fill(0);
    const colAux = new Array(matrix[0].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                rowAux[i] = rowAux[i] + 1;
                colAux[j] = colAux[j] + 1;
            } else {
                if (rowAux[i] > 0) {
                    rowTips[i].push(rowAux[i]);
                    rowAux[i] = 0;
                }
                if (colAux[j] > 0) {
                    colTips[j].push(colAux[j]);
                    colAux[j] = 0;
                }
            }
        }
    }

    rowAux.forEach((row, index) => {
        if (row > 0) {
            rowTips[index].push(row);
        }
    })

    colAux.forEach((col, index) => {
        if (col > 0) {
            colTips[index].push(col);
        }
    })

    return [rowTips, colTips];
}

const GameTable = (props: Props) => {

    const matrix = props.matrix;
    const [currentGame, setCurrentGame] = useState<GAME_STATE[][]>(createNewArray(matrix.length,matrix[0].length, GAME_STATE.HIDDEN));
    const [rowTips, colTips] = calculateRowColTips(matrix);

    const onCellClicked = (row: number, col: number) => {
        let newArray = [...currentGame];
        if (matrix[row][col]) {
            newArray[row][col] = GAME_STATE.HIT;
        } else {
            newArray[row][col] = GAME_STATE.MISS;
        }
        setCurrentGame(newArray);
    }

    return <GameTableStyle rowNum={matrix.length + 1} colNum={matrix[0].length + 1}>
        <div></div>
        {colTips.map((tips, colIndex) => {
            return <CellColTip key={`colTip_${colIndex}`}>{tips.map(tip => {
                return <><br/>{tip}</>
            })}</CellColTip>
        })}
        {currentGame.map((row, rowIndex) => {
            return row.map((item, colIndex) => {
                return <>
                {colIndex === 0 ? <CellRowTip key={`rowTip_${rowIndex}`}>{rowTips[rowIndex].join(' ')}</CellRowTip> : null}
                <Cell key={`cell_${rowIndex}_${colIndex}`} 
                            bgColor={item === GAME_STATE.HIT ? matrix[rowIndex][colIndex]! : "#FFFFFF"}
                            onClick={() => {
                                onCellClicked(rowIndex, colIndex);
                        }}>
                    {item === GAME_STATE.MISS ? "X" : ""}
                </Cell>
                </>
            })
        })}
    </GameTableStyle>
}

export default GameTable
