import { InitialStateType, QuizActionType } from "../context/QuizContext.type";

export const initialState: InitialStateType = {
  selectedQuiz: null,
  currentQuestion: 0,
};

export const quizReducer = (state: InitialStateType, action: QuizActionType): InitialStateType => {
  switch (action.type) {
    case "SET_QUIZ":
      return {
        ...state,
        selectedQuiz: action.payload.quiz,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "RESET":
      return {
        selectedQuiz: null,
        currentQuestion: 0,
      };

    case "SELECT_OPTION":
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
            questions: updateSelectedOption ? updateSelectedOption : state.selectedQuiz.questions,
          },
        };
      } else {
        return state;
      }

    case "EVALUATE_RESULTS":
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
