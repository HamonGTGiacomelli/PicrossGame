import { GameBoardStatusType, GameBoardType, GAME_STATE } from "../types";
import { createNewArray } from "./array";
export class Game {
    boardTemplate: GameBoardType;
    boardStatus: GameBoardStatusType;

    constructor(boardTemplate: GameBoardType) {
        this.boardTemplate = boardTemplate;
        this.boardStatus = createNewArray<GAME_STATE>(this.boardTemplate.length, this.boardTemplate[0].length, GAME_STATE.HIDDEN);
    }

    startGame() {
        this.resetBoardStatus();
    }

    resetBoardStatus() {
        this.boardStatus = createNewArray<GAME_STATE>(this.boardTemplate.length, this.boardTemplate[0].length, GAME_STATE.HIDDEN);
    }

    play(row: number, column: number): boolean {
        if (!this.validatePlay(row, column)) {
            return false;
        }
        if (this.boardTemplate[row][column]) {
            this.boardStatus[row][column] = GAME_STATE.HIT;
        } else {
            this.boardStatus[row][column] = GAME_STATE.MISS;
        }
        return true;
    }

    private validatePlay(row: number, column: number): boolean {
        if (row >= this.boardTemplate.length || column >= this.boardTemplate[0].length) {
            return false;
        }
        if (this.boardStatus[row][column] !== GAME_STATE.HIDDEN) {
            return false;
        }
        return true;
    }
}
