export type InitialAuthFormState = {
   name: string;
   email: string;
   password: string;
   confirmPassword: string;
   showPassword: boolean;
   showConfirmPassword: boolean;
   errorMessage: string;
   isLoading: boolean;
};

export enum AuthFormActionTypeEnum {
   SET_NAME = "SET_NAME",
   SET_EMAIL = "SET_EMAIL",
   SET_PASSWORD = "SET_PASSWORD",
   SET_CONFIRM_PASSWORD = "SET_CONFIRM_PASSWORD",
   TOGGLE_SHOW_PASSOWRD = "TOGGLE_SHOW_PASSOWRD",
   TOGGLE_SHOW_CONFIRM_PASSOWRD = " TOGGLE_SHOW_CONFIRM_PASSOWRD",
   SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE",
   SET_LOADING = "SET_LOADING",
   RESET_FORM = "RESET_FROM",
}

export type AuthFormAction =
   | {
        type: AuthFormActionTypeEnum.SET_NAME;
        payload: string;
     }
   | {
        type: AuthFormActionTypeEnum.SET_EMAIL;
        payload: string;
     }
   | {
        type: AuthFormActionTypeEnum.SET_PASSWORD;
        payload: string;
     }
   | {
        type: AuthFormActionTypeEnum.SET_CONFIRM_PASSWORD;
        payload: string;
     }
   | {
        type: AuthFormActionTypeEnum.TOGGLE_SHOW_PASSOWRD;
     }
   | {
        type: AuthFormActionTypeEnum.TOGGLE_SHOW_CONFIRM_PASSOWRD;
     }
   | {
        type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE;
        payload: string;
     }
   | {
        type: AuthFormActionTypeEnum.SET_LOADING;
     }
   | {
        type: AuthFormActionTypeEnum.RESET_FORM;
     };
