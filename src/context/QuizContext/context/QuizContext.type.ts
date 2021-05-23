import { Quiz } from "../../../database/Quiz.type";

export type InitialStateType = {
  selectedQuiz: Quiz | null;
  currentQuestion: number;
};

export type QuizContextType = {
  quizState: InitialStateType;
  quizDispatch: (action: QuizActionType) => void;
};

export type QuizActionType =
  | {
      type: "SET_QUIZ";
      payload: { quiz: Quiz };
    }
  | {
      type: "NEXT_QUESTION";
    }
  | {
      type: "EVALUATE_RESULTS";
    }
  | {
      type: "RESET";
    }
  | {
      type: "SELECT_OPTION";
      payload: {
        question: string;
        option: string;
      };
    };
