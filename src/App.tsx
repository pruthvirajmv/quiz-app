import "./App.css";
import { AppNavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import {
   Home,
   Login,
   Quiz,
   QuizSelection,
   SignUp,
   Profile,
   ResetPassword,
   HighScore,
   LeaderBoard,
} from "./pages";
import {
   AuthDispatchTypeEnum,
   setupAuthHeaderForServiceCalls,
   backendAPI,
   checkError,
} from "./utils";
import { useAuth } from "./context";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import axios from "axios";

function App() {
   const { authDispatch } = useAuth();

   const loginHistory = localStorage.getItem("loginSession");
   useEffect(() => {
      if (loginHistory) {
         const token = JSON.parse(loginHistory)?.token;
         if (token) {
            setupAuthHeaderForServiceCalls(token);
            authDispatch({ type: AuthDispatchTypeEnum.LOAD_TOKEN, payload: { token } });
            (async () => {
               try {
                  const {
                     data: { user },
                  } = await axios({
                     method: "GET",
                     url: `${backendAPI}/user`,
                  });
                  authDispatch({ type: AuthDispatchTypeEnum.LOAD_USER, payload: user });
               } catch (error) {
                  checkError(error);
               }
            })();
         }
      }
   }, [loginHistory, authDispatch]);

   return (
      <div className="App">
         <AppNavBar />

         <main className="">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/playquiz/:level" element={<Quiz />} />
               <Route path="/playquiz/selection" element={<QuizSelection />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<SignUp />} />
               <Route path="/leaderboard" element={<LeaderBoard />} />

               <PrivateRoute path="/profile" element={<Profile />} />
               <PrivateRoute path="/resetpassword" element={<ResetPassword />} />
               <PrivateRoute path="/highscore" element={<HighScore />} />
            </Routes>
         </main>
      </div>
   );
}

export default App;
