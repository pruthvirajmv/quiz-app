import { InitialAuthFormState, AuthFormAction, AuthFormActionTypeEnum } from "./authForm.type";

export const authFormReducer = (state: InitialAuthFormState, action: AuthFormAction) => {
   switch (action.type) {
      case AuthFormActionTypeEnum.SET_NAME:
         return {
            ...state,
            name: action.payload,
         };

      case AuthFormActionTypeEnum.SET_MAIL:
         return {
            ...state,
            mail: action.payload,
         };

      case AuthFormActionTypeEnum.SET_PASSWORD:
         return {
            ...state,
            password: action.payload,
         };

      case AuthFormActionTypeEnum.SET_CONFIRM_PASSWORD:
         return {
            ...state,
            confirmPassword: action.payload,
         };

      case AuthFormActionTypeEnum.SET_LOADING:
         return {
            ...state,
            isLoading: !state.isLoading,
         };

      case AuthFormActionTypeEnum.SET_ERROR_MESSAGE:
         return {
            ...state,
            errorMessage: action.payload,
         };
      case AuthFormActionTypeEnum.TOGGLE_SHOW_PASSOWRD:
         return {
            ...state,
            showPassword: !state.showPassword,
         };
      case AuthFormActionTypeEnum.TOGGLE_SHOW_CONFIRM_PASSOWRD:
         return {
            ...state,
            showConfirmPassword: !state.showConfirmPassword,
         };

      default:
         return state;
   }
};
