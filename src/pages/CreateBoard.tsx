import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import GameBoard from "../components/GameBoard/GameBoard";
import { GAME_STATE } from "../types";
import Card from "../view/Card";
import Container from "../view/Container";
import Header from "../view/Header";

const ContentStyle = styled.div`
  display: flex;
`;

const CreateBoard = () => {
  return (
    <Container>
      <Header>Create Game</Header>
      <ContentStyle>
        <Card>
          <div>
            <span>number of rows and columns: </span>
            <input type="text"></input>
            <button>Create Grid</button>
          </div>
          <div style={{ display: "felx" }}>
            <SketchPicker />
            <GameBoard
              gameboard={[
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
              ]}
              gameboardStatus={[
                [GAME_STATE.HIT,GAME_STATE.HIT,GAME_STATE.HIT],
                [GAME_STATE.HIT,GAME_STATE.HIT,GAME_STATE.HIT],
              ]}
            />
          </div>
        </Card>
      </ContentStyle>
    </Container>
  );
};

export default CreateBoard;
