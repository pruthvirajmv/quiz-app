import React, { useEffect } from "react";

import "./quiz.css";

import { useNavigate } from "react-router";
import { QuizReportCard, QuizQuestionReviewCard } from "./components";
import axios from "axios";
import { AuthDispatchTypeEnum, backendAPI } from "../../utils";
import { useAuth, useQuiz } from "../../context";

export function GameResults() {
   const navigate = useNavigate();
   const { authDispatch } = useAuth();
   const {
      quizState: { selectedQuiz },
      setLeaderBoard,
   } = useQuiz();

   useEffect(() => {
      (async () => {
         try {
            const { data } = await axios({
               method: "POST",
               url: `${backendAPI}/user/highscore`,
               data: { attemptedLevel: selectedQuiz?.quizType, newScore: selectedQuiz?.score },
            });
            authDispatch({
               type: AuthDispatchTypeEnum.UPDATE_ATTEMPTED_LEVEL_HIGH_SCORE,
               payload: { highScore: data.newHighScore },
            });
         } catch (error) {
            console.error(error);
         }
      })();
   }, [selectedQuiz, authDispatch]);

   useEffect(() => {
      console.log(selectedQuiz);

      (async () => {
         try {
            const { data } = await axios({
               method: "POST",
               url: `${backendAPI}/leaderboard`,
               data: { attemptedLevel: selectedQuiz?.quizType, newScore: selectedQuiz?.score },
            });
            setLeaderBoard(data.leaderBoard);
         } catch (error) {}
      })();
   }, [selectedQuiz, setLeaderBoard]);

   return (
      <>
         <QuizReportCard />

         <QuizQuestionReviewCard />

         <div>
            <button type="button" className="btn btn-info" onClick={() => navigate("/")}>
               Done
            </button>
         </div>
      </>
   );
}
