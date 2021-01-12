import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import styled from "styled-components";
import Board from "../components/Board/Board";
import { GameEditor, newGameEditorInstance, setBoardValue } from "../Util/GameEditor";
import Container from "../view/Container";
import Header from "../view/Header";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 3px;
    padding: 16px;
`;

const GridEditorStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
`;

const ColorPickerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CreateBoard = () => {
    const [gameEditor, setGameEditor] = useState<GameEditor | null>(null);
    const [textGridLength, setTextGridLength] = useState("");
    const [colorSelected, setColorSelected] = useState("#000000");

    const onChangeGridLength: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setTextGridLength(event.target.value);
    };

    const onClickCreateGrid: MouseEventHandler<HTMLButtonElement> = () => {
        const gridLength = parseInt(textGridLength);
        setGameEditor(newGameEditorInstance(gridLength, gridLength));
    };

    const onClickCellAction = (row: number, column: number) => {
        setGameEditor(setBoardValue(gameEditor!, row, column, colorSelected));
    };

    const onChangeColor: ColorChangeHandler = (color) => {
        setColorSelected(color.hex);
    };

    return (
        <Container>
            <Header>Create Game</Header>
            <ContentStyle>
                <div>
                    <span>Row and Column Length</span>
                    <input type="text" value={textGridLength} onChange={onChangeGridLength}></input>
                    <button onClick={onClickCreateGrid}>Create Grid</button>
                </div>
                {gameEditor ? (
                    <GridEditorStyle>
                        <ColorPickerContainer>
                            <SketchPicker color={colorSelected} onChange={onChangeColor} />
                        </ColorPickerContainer>
                        <Board
                            board={gameEditor.board}
                            onClickCellAction={onClickCellAction}
                            rowTips={gameEditor.rowTips}
                            columnTips={gameEditor.columnTips}
                        />
                    </GridEditorStyle>
                ) : null}
            </ContentStyle>
        </Container>
    );
};

export default CreateBoard;
