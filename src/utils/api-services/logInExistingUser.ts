import axios from "axios";
import { backendAPI, checkError, setupAuthHeaderForServiceCalls } from "../index";
import { AuthActionType } from "../../context/AuthContext/AuthContext.type";
import { AuthDispatchTypeEnum } from "../index";

type LogInExistingUserParamType = {
   name: String;
   password: String;
   authDispatch: (action?: AuthActionType) => void;
   setLoading: (param?: Boolean) => void;
   setErrorMsg: (param?: String) => void;
   state: { from: String };
   navigateTo: (param?: String) => void;
};

export const logInExistingUser = async ({
   name,
   password,
   authDispatch,
   setLoading,
   setErrorMsg,
   navigateTo,
   state,
}: LogInExistingUserParamType) => {
   try {
      setLoading(true);
      const {
         data: { user, token },
      } = await axios({
         method: "POST",
         url: `${backendAPI}/user/login`,
         data: { username: name, password: password },
      });
      setupAuthHeaderForServiceCalls(token);
      authDispatch({ type: AuthDispatchTypeEnum.LOAD_TOKEN, payload: token });
      authDispatch({ type: AuthDispatchTypeEnum.LOAD_USER, payload: user });
      navigateTo(state?.from ? state.from : "/");
      localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
   } catch (error) {
      checkError(error);
      setErrorMsg(error.response.data.message);
   } finally {
      setLoading(false);
   }
};
