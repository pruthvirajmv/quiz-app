import React from "react";

import "./quiz.css";

import { useNavigate } from "react-router";
import { QuizReportCard, QuizQuestionReviewCard } from "./components";

export function GameResults() {
   const navigate = useNavigate();

   return (
      <>
         <QuizReportCard />

         <QuizQuestionReviewCard />

         <div>
            <button
               type="button"
               className="btn btn-info"
               onClick={() => navigate("/")}>
               Done
            </button>
         </div>
      </>
   );
}
