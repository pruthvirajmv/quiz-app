import React, { Dispatch } from "react";
import { GameReducerDispatchType, GameReducerType } from "./GameReducer.type";

import "./quiz.css";

type InstructionsPropsType = {
   dispatch: Dispatch<GameReducerType>;
};

export function Instructions({ dispatch }: InstructionsPropsType) {
   const gameStartHandler = () => {
      dispatch({ type: GameReducerDispatchType.SET_INSTRUCTIONS });
      dispatch({ type: GameReducerDispatchType.SET_START });
   };

   return (
      <div className="card shadow-none card-instructions ">
         <div className="card-body ">
            <h5 className="card-title">Quiz Instructions</h5>
            <p className="text-start">
               <i className="fa fa-bullhorn" aria-hidden="true"></i> For every correct answer 2
               points will be rewarded{" "}
            </p>
            <p className="text-start">
               <i className="fa fa-bullhorn" aria-hidden="true"></i> For every wrong answer 1 point
               will be deducted
            </p>
            <button className="btn btn-primary" onClick={gameStartHandler}>
               Play
            </button>
         </div>
      </div>
   );
}
