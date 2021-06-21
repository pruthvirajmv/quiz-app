import { AuthDispatchTypeEnum } from "../../utils";

export type UserHighScore = {
   level: string;
   attempts: number;
   score: number;
};

export type InitialAuthStateType = {
   userName: String;
   email: String;
   token: String;
   isUserLoggedIn: Boolean;
   highScore: UserHighScore[];
};

export type AuthContextType = {
   authState: InitialAuthStateType;
   authDispatch: (action: AuthActionType) => void;
};

export type LoginHistory = {
   token: String;
   isUserLoggedIn: Boolean;
};

export type AuthActionType =
   | {
        type: AuthDispatchTypeEnum.LOAD_USER;
        payload: { userName: String; email: String; highScore: UserHighScore[] };
     }
   | {
        type: AuthDispatchTypeEnum.LOGOUT_USER;
     }
   | {
        type: AuthDispatchTypeEnum.LOAD_TOKEN;
        payload: { token: String };
     }
   | {
        type: AuthDispatchTypeEnum.LAOD_HIGH_SCORE;
        payload: { highScore: UserHighScore[] };
     }
   | {
        type: AuthDispatchTypeEnum.UPDATE_ATTEMPTED_LEVEL_HIGH_SCORE;
        payload: { highScore: UserHighScore };
     };
