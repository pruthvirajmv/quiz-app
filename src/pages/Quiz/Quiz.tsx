import React, { useEffect, useReducer } from "react";

import { useQuiz } from "../../context";
import { GamePlay } from "./GamePlay";
import { Instructions } from "./Instructions";
import { GameResults } from "./GameResults";
import { QuizDispatchTypeEnum } from "../../utils";
import { GameStateType, GameReducerType, GameReducerDispatchType } from "./GameReducer.type";

export function Quiz() {
   const {
      quizState: { selectedQuiz, currentQuestion },
      quizDispatch,
   } = useQuiz();

   const gameInitialState: GameStateType = {
      game: null,
      instructions: true,
      start: false,
      showResult: false,
   };

   const gameReducer = (state: GameStateType, action: GameReducerType): GameStateType => {
      switch (action.type) {
         case GameReducerDispatchType.SET_GAME:
            return {
               ...state,
               game: action.payload,
            };
         case GameReducerDispatchType.SET_INSTRUCTIONS:
            return {
               ...state,
               instructions: !state.instructions,
            };
         case GameReducerDispatchType.SET_START:
            return {
               ...state,
               start: !state.start,
            };
         case GameReducerDispatchType.SET_SHOW_RESULT:
            return {
               ...state,
               showResult: !state.showResult,
            };
         default:
            throw new Error("Undefined dispatch type");
      }
   };

   const [gameState, gameDispatch] = useReducer(gameReducer, gameInitialState);

   useEffect(() => {
      if (selectedQuiz) {
         if (currentQuestion === selectedQuiz.questions.length) {
            gameDispatch({ type: GameReducerDispatchType.SET_SHOW_RESULT });
            gameDispatch({ type: GameReducerDispatchType.SET_START });
            quizDispatch({ type: QuizDispatchTypeEnum.EVALUATE_RESULTS });
         }
         gameDispatch({
            type: GameReducerDispatchType.SET_GAME,
            payload: selectedQuiz.questions[currentQuestion],
         });
      }
   }, [selectedQuiz, gameState, currentQuestion, gameDispatch, quizDispatch]);

   return (
      <>
         {gameState.instructions && <Instructions dispatch={gameDispatch} />}
         {gameState.start && <GamePlay game={gameState.game} />}
         {gameState.showResult && <GameResults />}
      </>
   );
}
