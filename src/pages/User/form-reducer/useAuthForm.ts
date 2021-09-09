import { useReducer } from "react";
import { InitialAuthFormState } from "./authForm.type";
import { authFormReducer } from "./authFormReducer";

export default function useAuthForm() {
   const authFormInitialState: InitialAuthFormState = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      errorMessage: "",
      isLoading: false,
   };

   const [authFormState, authFormDispatch] = useReducer(authFormReducer, authFormInitialState);

   return { authFormState, authFormDispatch };
}
