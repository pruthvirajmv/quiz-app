import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.css";

import { useAuth } from "../../context";
import { backendAPI, AuthDispatchTypeEnum, checkError } from "../../utils";
import useAuthForm from "./form-reducer/useAuthForm";
import { AuthFormActionTypeEnum } from "./form-reducer/authForm.type";

export function SignUp() {
   const navigate = useNavigate();

   const { authDispatch } = useAuth();

   const { authFormState, authFormDispatch } = useAuthForm();
   console.log(authFormState);

   const signUpNewUser = async (name: string, mail: string, password: string) => {
      try {
         authFormDispatch({ type: AuthFormActionTypeEnum.SET_LOADING });
         const response = await axios({
            method: "POST",
            url: `${backendAPI}/user/register`,
            data: { username: name, email: mail, password: password },
         });
         authDispatch({ type: AuthDispatchTypeEnum.LOAD_USER, payload: response.data });
         navigate("/login");
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

   const signUpSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (authFormState.password !== authFormState.confirmPassword) {
         return authFormDispatch({
            type: AuthFormActionTypeEnum.SET_ERROR_MESSAGE,
            payload: "Password did not matched",
         });
      }
      signUpNewUser(authFormState.name, authFormState.email, authFormState.password);
   };

   return (
      <div className="login-layout">
         <h2 className="text-center">Register</h2>
         <form onSubmit={signUpSubmitHandler}>
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
                     Sign Up
                  </button>
               )}
            </div>
            <p className="mt-2 text-danger text-center fs-6">{authFormState.errorMessage}</p>
         </form>
      </div>
   );
}
