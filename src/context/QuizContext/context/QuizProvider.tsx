import React, { useContext, useReducer, useState } from "react";
import { initialState, quizReducer } from "../reducer/quizReducer";
import { QuizContextType, LeaderBoardType } from "./QuizContext.type";

const QuizContext = React.createContext({} as QuizContextType);

export const QuizContextProvider: React.FC = ({ children }) => {
   const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

   const initialLeaderBoard: LeaderBoardType[] = [
      {
         level: "",
         standings: [],
      },
   ];

   const [leaderBoard, setLeaderBoard] = useState<LeaderBoardType[]>(initialLeaderBoard);

   return (
      <QuizContext.Provider value={{ quizState, quizDispatch, leaderBoard, setLeaderBoard }}>
         {children}
      </QuizContext.Provider>
   );
};

export const useQuiz = () => useContext(QuizContext);
