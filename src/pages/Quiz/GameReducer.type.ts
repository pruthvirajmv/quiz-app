import { QuestionBank } from "../../database/Quiz.type";

export type GameStateType = {
   game: QuestionBank | null;
   instructions: boolean;
   start: boolean;
   showResult: boolean;
};

export enum GameReducerDispatchType {
   SET_GAME = "SET_GAME",
   SET_INSTRUCTIONS = "SET_INSTRUCTIONS",
   SET_START = "SET_START",
   SET_SHOW_RESULT = "SET_SHOW_RESULT",
}

export type GameReducerType =
   | { type: GameReducerDispatchType.SET_GAME; payload: QuestionBank }
   | { type: GameReducerDispatchType.SET_INSTRUCTIONS }
   | { type: GameReducerDispatchType.SET_START }
   | { type: GameReducerDispatchType.SET_SHOW_RESULT };
