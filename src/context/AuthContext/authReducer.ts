import { InitialAuthStateType, AuthActionType } from "./AuthContext.type";
import { AuthDispatchTypeEnum } from "../../utils";

export const initialState: InitialAuthStateType = {
   userName: "",
   email: "",
   token: "",
   isUserLoggedIn: false,
   highScore: [],
};

export const authReducer = (
   state: InitialAuthStateType,
   action: AuthActionType
): InitialAuthStateType => {
   switch (action.type) {
      case AuthDispatchTypeEnum.LOAD_USER:
         return {
            ...state,
            userName: action.payload.userName,
            email: action.payload.email,
            highScore: action.payload.highScore,
            isUserLoggedIn: true,
         };

      case AuthDispatchTypeEnum.LOGOUT_USER:
         return { ...state, userName: "", email: "", isUserLoggedIn: false, token: "" };

      case AuthDispatchTypeEnum.LOAD_TOKEN:
         return {
            ...state,
            token: action.payload.token,
         };
      case AuthDispatchTypeEnum.UPDATE_ATTEMPTED_LEVEL_HIGH_SCORE:
         return {
            ...state,
            highScore: state.highScore.map((current) =>
               current?.level === action.payload.highScore.level
                  ? action.payload.highScore
                  : current
            ),
         };

      default:
         return state;
   }
};
