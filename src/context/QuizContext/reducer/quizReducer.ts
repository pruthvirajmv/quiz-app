import { InitialStateType, QuizActionType } from "../context/QuizContext.type";
import { QuizDispatchTypeEnum } from "../../../utils";

export const initialState: InitialStateType = {
   selectedQuiz: null,
   currentQuestion: 0,
};

export const quizReducer = (state: InitialStateType, action: QuizActionType): InitialStateType => {
   switch (action.type) {
      case QuizDispatchTypeEnum.SET_QUIZ:
         return {
            ...state,
            selectedQuiz: {
               ...state.selectedQuiz,
               quizType: action.payload.quizType,
               questions: action.payload.questions,
               score: 0,
            },
         };

      case QuizDispatchTypeEnum.NEXT_QUESTION:
         return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
         };

      case QuizDispatchTypeEnum.RESET:
         return {
            selectedQuiz: null,
            currentQuestion: 0,
         };

      case QuizDispatchTypeEnum.SELECT_OPTION:
         if (state.selectedQuiz) {
            const updateSelectedOption = state.selectedQuiz?.questions.map((question) => {
               if (question.question === action.payload.question) {
                  return {
                     ...question,
                     options: question.options.map((option) => {
                        if (option.option === action.payload.option) {
                           return { ...option, isSelected: true };
                        }
                        return { ...option, isSelected: false };
                     }),
                  };
               }
               return question;
            });
            return {
               ...state,
               selectedQuiz: {
                  ...state.selectedQuiz,
                  questions: updateSelectedOption
                     ? updateSelectedOption
                     : state.selectedQuiz.questions,
               },
            };
         } else {
            return state;
         }

      case QuizDispatchTypeEnum.EVALUATE_RESULTS:
         if (state.selectedQuiz) {
            return {
               currentQuestion: 0,
               selectedQuiz: {
                  ...state.selectedQuiz,
                  score: state.selectedQuiz.questions.reduce(
                     (score, question) =>
                        question.options.some((option) => option.isCorrect && option.isSelected)
                           ? score + question.points
                           : score - question.negativePoints || 0,
                     0
                  ),
               },
            };
         } else {
            return state;
         }

      default:
         return state;
   }
};
