import React, { useContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducer/quizReducer";
import { QuizContextType } from "./QuizContext.type";

const QuizContext = React.createContext({} as QuizContextType);

export const QuizContextProvider: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  console.log(quizState);
  return <QuizContext.Provider value={{ quizState, quizDispatch }}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => useContext(QuizContext);
