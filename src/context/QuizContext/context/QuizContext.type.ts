import { QuizDispatchTypeEnum } from "../../../utils";

export type Option = {
   option: string;
   isCorrect: boolean;
   isSelected?: boolean;
};

export type QuestionBank = {
   question: string;
   options: Option[];
   points: number;
   negativePoints: number;
};

export type Quiz = {
   quizType: string;
   questions: QuestionBank[];
   score: number;
};
export type InitialStateType = {
   selectedQuiz: Quiz | null;
   currentQuestion: number;
};

export type QuizContextType = {
   quizState: InitialStateType;
   quizDispatch: (action: QuizActionType) => void;
   leaderBoard: LeaderBoardType[];
   setLeaderBoard: (action: LeaderBoardType[]) => void;
};

export type QuizActionType =
   | {
        type: QuizDispatchTypeEnum.SET_QUIZ;
        payload: { quizType: string; questions: QuestionBank[] };
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

// Leaderboard
export type Standings = {
   userName: string;
   score: number;
};

export type LeaderBoardType = {
   level: string;
   standings: Standings[];
};
