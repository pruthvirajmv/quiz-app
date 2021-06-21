import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import "./login.css";

import { useAuth } from "../../context";
import {
   backendAPI,
   setupAuthHeaderForServiceCalls,
   AuthDispatchTypeEnum,
   checkError,
} from "../../utils";
import useAuthForm from "./form-reducer/useAuthForm";
import { AuthFormActionTypeEnum } from "./form-reducer/authForm.type";

export function Login() {
   const location = useLocation();
   const navigate = useNavigate();
   type LocationState = { from: string };
   const locationState = location?.state as LocationState;
   const navigateBackTo = locationState?.from || "/";

   const { authDispatch } = useAuth();

   const { authFormState, authFormDispatch } = useAuthForm();

   const logInExistingUser = async (name: string, password: string) => {
      try {
         authFormDispatch({ type: AuthFormActionTypeEnum.SET_LOADING });
         const {
            data: { user, token },
         } = await axios({
            method: "POST",
            url: `${backendAPI}/user/login`,
            data: { username: name, password: password },
         });
         setupAuthHeaderForServiceCalls(token);
         authDispatch({ type: AuthDispatchTypeEnum.LOAD_TOKEN, payload: { token } });
         authDispatch({ type: AuthDispatchTypeEnum.LOAD_USER, payload: user });
         navigate(navigateBackTo);
         localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
      } catch (error) {
         checkError(error);
         console.log(error);
         authFormDispatch({
            type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
            payload: error.response.data.message,
         });
      } finally {
         authFormDispatch({ type: AuthFormActionTypeEnum.SET_LOADING });
      }
   };

   const loginSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      logInExistingUser(authFormState.name, authFormState.password);
   };

   return (
      <div className="login-layout">
         <h2 className="text-center">User Login</h2>
         <form onSubmit={loginSubmitHandler}>
            <div className="mb-3">
               <label className="form-label ">User Name</label>
               <input
                  type="text"
                  className="form-control input-border "
                  placeholder="enter username"
                  onChange={(e) =>
                     authFormDispatch({
                        type: AuthFormActionTypeEnum.SET_NAME,
                        payload: e.target.value,
                     })
                  }
                  required
               />
            </div>
            <div className="mb-3">
               <label className="form-label">Password</label>
               <div className="d-flex form-control justify-content-between input-border">
                  <input
                     className=" border-0 width-100 outline-0"
                     placeholder="enter password"
                     minLength={8}
                     required
                     onChange={(e) =>
                        authFormDispatch({
                           type: AuthFormActionTypeEnum.SET_PASSWORD,
                           payload: e.target.value,
                        })
                     }
                     type={authFormState.showPassword ? "text" : "password"}
                  />
                  <span>
                     <i
                        onClick={() =>
                           authFormDispatch({ type: AuthFormActionTypeEnum.TOGGLE_SHOW_PASSOWRD })
                        }
                        className={authFormState.showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                        aria-hidden="true"></i>
                  </span>
               </div>
            </div>
            <div className="d-grid">
               {authFormState.isLoading ? (
                  <button className="btn btn-info fs-5 pt-0 pb-0" type="button" disabled>
                     <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"></span>
                     Loading...
                  </button>
               ) : (
                  <button type="submit" className="btn btn-info fs-5 pt-0 pb-0">
                     Login
                  </button>
               )}
            </div>
            <p className="mt-2 text-danger text-center fs-6">{authFormState.errorMessage}</p>
         </form>
         <div className="mb-2 mt-1 fs-5">
            Forgot your password?{" "}
            <button
               onClick={() => navigate("/reset")}
               className="btn btn-outline-info btn-sm pt-0 pb-0 text-dark">
               Reset
            </button>{" "}
         </div>
         <div className="fs-5">
            Not a user yet?{" "}
            <button
               onClick={() => navigate("/register")}
               className="btn btn-outline-info btn-sm pt-0 pb-0 text-dark">
               Sign Up
            </button>{" "}
         </div>
      </div>
   );
}
