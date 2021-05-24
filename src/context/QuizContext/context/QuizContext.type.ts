import { Quiz } from "../../../database/Quiz.type";
import { QuizDispatchTypeEnum } from "../../../utils";

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
        type: QuizDispatchTypeEnum.SET_QUIZ;
        payload: { quiz: Quiz };
     }
   | {
        type: QuizDispatchTypeEnum.NEXT_QUESTION;
     }
   | {
        type: QuizDispatchTypeEnum.EVALUATE_RESULTS;
     }
   | {
        type: QuizDispatchTypeEnum.RESET;
     }
   | {
        type: QuizDispatchTypeEnum.SELECT_OPTION;
        payload: {
           question: string;
           option: string;
        };
     };
