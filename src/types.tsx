export type GameBoardType = (string | undefined)[][];
export type GameBoardStatusType = GAME_STATE[][];
export enum GAME_STATE {
  HIDDEN = "HIDDEN",
  HIT = "HIT",
  MISS = "MISS",
}
