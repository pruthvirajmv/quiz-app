import React, { useContext, useReducer } from "react";

import { InitialAuthStateType, AuthContextType } from "./AuthContext.type";
import { setupAuthHeaderForServiceCalls } from "../../utils";
import { authReducer } from "./authReducer";

const AuthContext = React.createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
   let initialState: InitialAuthStateType = {
      userName: "",
      email: "",
      token: "",
      isUserLoggedIn: false,
      highScore: [],
   };

   const loginHistory = localStorage.getItem("loginSession");

   if (loginHistory) {
      setupAuthHeaderForServiceCalls(JSON.parse(loginHistory).token);
      initialState.token = JSON.parse(loginHistory).token;
   }

   const [authState, authDispatch] = useReducer(authReducer, initialState);

   // useEffect(() => {
   //    (async () => {
   //       try {
   //          const { data } = await axios({
   //             method: "GET",
   //             url: `${backendAPI}/user/highscore`,
   //          });
   //          authDispatch({
   //             type: AuthDispatchTypeEnum.LAOD_HIGH_SCORE,
   //             payload: { highScore: data.highscores },
   //          });
   //       } catch (error) {
   //          console.error(error);
   //       }
   //    })();
   // }, [authDispatch]);

   return (
      <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
