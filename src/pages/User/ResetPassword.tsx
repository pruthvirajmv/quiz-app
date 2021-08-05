import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { backendAPI, AuthDispatchTypeEnum } from "../../utils";
import { useAuth } from "../../context";
import useAuthForm from "./form-reducer/useAuthForm";
import { AuthFormActionTypeEnum } from "./form-reducer/authForm.type";

export function ResetPassword() {
   const navigate = useNavigate();

   const { authDispatch } = useAuth();
   const { authFormState, authFormDispatch } = useAuthForm();

   const forgotPasswordSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
         authFormState.email === "" ||
         !/^([^@]+)([@]{1})([a-z]+)\.com$/.test(authFormState.email)
      ) {
         return authFormDispatch({
            type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
            payload: "please enter valid email",
         });
      }

      if (!/[.\d]/.test(authFormState.password)) {
         return authFormDispatch({
            type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
            payload: "password must be alphanumeric",
         });
      }

      if (authFormState.password !== authFormState.confirmPassword) {
         return authFormDispatch({
            type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
            payload: "password did not match",
         });
      }
      authFormDispatch({
         type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
         payload: "",
      });

      resetForgotPassword(authFormState.email, authFormState.password);
   };

   const resetForgotPassword = async (email: string, password: string) => {
      try {
         authFormDispatch({ type: AuthFormActionTypeEnum.SET_LOADING });
         const {
            data: { user, token },
         } = await axios({
            method: "POST",
            url: `${backendAPI}/user/resetpassword`,
            data: { email: email, password: password },
         });

         authDispatch({ type: AuthDispatchTypeEnum.LOAD_USER, payload: user });
         localStorage?.setItem("loginSession", JSON.stringify({ isUserLoggedIn: true, token }));
         navigate("/profile");
      } catch (err) {
         if (err.response.status === 404) {
            authFormDispatch({
               type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
               payload: "user does not exist",
            });
         } else {
            authFormDispatch({
               type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
               payload: "Something went wrong, please try again",
            });
         }
      } finally {
         authFormDispatch({ type: AuthFormActionTypeEnum.SET_LOADING });
      }
   };

   return (
      <div className="login-layout">
         <h2 className="text-center">Register</h2>
         <form onSubmit={forgotPasswordSubmitHandler}>
            <div className="mb-3">
               <label className="form-label ">User Mail</label>
               <input
                  type="text"
                  className="form-control input-border"
                  placeholder="enter email"
                  onChange={(e) =>
                     authFormDispatch({
                        type: AuthFormActionTypeEnum.SET_EMAIL,
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
            <div className="mb-3">
               <label className="form-label">Confirm Password</label>
               <div className="d-flex form-control justify-content-between input-border">
                  <input
                     className=" border-0 width-100 outline-0"
                     placeholder="re-enter password"
                     minLength={8}
                     required
                     onChange={(e) =>
                        authFormDispatch({
                           type: AuthFormActionTypeEnum.SET_CONFIRM_PASSWORD,
                           payload: e.target.value,
                        })
                     }
                     type={authFormState.showConfirmPassword ? "text" : "password"}
                  />
                  <span>
                     <i
                        onClick={() =>
                           authFormDispatch({
                              type: AuthFormActionTypeEnum.TOGGLE_SHOW_CONFIRM_PASSOWRD,
                           })
                        }
                        className={
                           authFormState.showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
                        }
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
                     Reset
                  </button>
               )}
            </div>
            <p className="mt-2 text-danger text-center fs-6">{authFormState.errorMessage}</p>
         </form>
      </div>
   );
}
