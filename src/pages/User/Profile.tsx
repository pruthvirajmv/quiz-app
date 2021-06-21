import React from "react";

import "./login.css";

import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import { AuthDispatchTypeEnum } from "../../utils";

export function Profile() {
   const { authState, authDispatch } = useAuth();
   const navigate = useNavigate();

   const logOutSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      authDispatch({ type: AuthDispatchTypeEnum.LOGOUT_USER });
      localStorage?.removeItem("loginSession");
      navigate("/");
   };

   return (
      <>
         <div className="login-layout">
            <h2 className="text-center">Welcome {authState.userName}</h2>
            <form onSubmit={logOutSubmitHandler}>
               <div className="mb-3">
                  <label className="form-label ">Name : </label>
                  <div>{authState.userName}</div>
               </div>
               <div className="mb-3">
                  <label className="form-label">Email :</label>
                  <div>{authState.email}</div>
               </div>
               <button type="submit" className="btn btn-info pt-0 pb-0">
                  Logout
               </button>
            </form>
            <div className="mt-4">
               Reset password?{" "}
               <button
                  onClick={() => navigate("/resetpassword")}
                  className="btn btn-outline-info btn-sm pt-0 pb-0 text-dark">
                  Reset
               </button>{" "}
            </div>
         </div>
      </>
   );
}
