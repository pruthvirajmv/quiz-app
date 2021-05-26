import React from "react";

import "../quiz.css";

import { useQuiz } from "../../../context";
import { useNavigate } from "react-router";

export function QuizReportCard() {
   const {
      quizState: { selectedQuiz },
   } = useQuiz();

   const navigate = useNavigate();

   const resultsReviewMessage = (score: number | undefined): string => {
      if ((score || 0) > 15) return "Well played! Awesome";
      if ((score || 0) > 10) return "Good Job!";
      if ((score || 0) < 10) return "Not bad! Try again";
      return "Try again";
   };

   return (
      <>
         <div className="card text-start card-report">
            <h5 className="card-header">Quiz Results</h5>
            <div className="card-body">
               <h5 className="card-title">Your Score : {selectedQuiz?.score || 0}/20 </h5>
               <p className="card-text">{resultsReviewMessage(selectedQuiz?.score)}</p>
               <button type="button" className="btn btn-info" onClick={() => navigate("/")}>
                  Home
               </button>
            </div>
         </div>
      </>
   );
}
