import React from "react";

import "../quiz.css";

import { useQuiz } from "../../../context";
import { useNavigate } from "react-router";

export function QuizReportCard() {
   const {
      quizState: { selectedQuiz },
   } = useQuiz();

   const navigate = useNavigate();

   return (
      <>
         <div className="card text-start card-report">
            <h5 className="card-header">Quiz Results</h5>
            <div className="card-body">
               <h5 className="card-title">
                  Your Score : {selectedQuiz?.score || 0}/20{" "}
               </h5>
               <p className="card-text">
                  {(selectedQuiz?.score || 0) > 15 && "Well played! Awesome"}
                  {(selectedQuiz?.score || 0) > 10 && "Good Job!"}
                  {(selectedQuiz?.score || 0) < 10 && "Not bad! Try again"}
               </p>
               <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => navigate("/")}>
                  Home
               </button>
            </div>
         </div>
      </>
   );
}
