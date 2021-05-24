import React from "react";

import "../quiz.css";

import { useQuiz } from "../../../context";

export function QuizQuestionReviewCard() {
   const {
      quizState: { selectedQuiz },
   } = useQuiz();

   return (
      <>
         {selectedQuiz?.questions.map(
            ({ question, options, points, negativePoints }, index) => {
               return (
                  <div className="container card-question">
                     <div className="card shadow p-3 mb-5 bg-body rounded align-middle ">
                        <div className="card-body">
                           <h5 className="card-title">Question {index + 1}</h5>
                           <p
                              className={
                                 options.some(
                                    (option) =>
                                       option.isCorrect && option.isSelected
                                 )
                                    ? "badge bg-success"
                                    : "badge bg-danger"
                              }>
                              Points :{" "}
                              <span>
                                 {options.some(
                                    (option) =>
                                       option.isCorrect && option.isSelected
                                 )
                                    ? points
                                    : negativePoints || 0}
                              </span>
                           </p>
                           <p className="card-text">{question}</p>
                        </div>
                        <ul className="list-group list-group-flush ">
                           {options.map((option) => {
                              return (
                                 <li className="list-group-item">
                                    <button
                                       type="button"
                                       className={
                                          option.isCorrect
                                             ? "btn btn-success btn-option "
                                             : option.isSelected
                                             ? "btn btn-danger btn-option"
                                             : "btn btn-secondary btn-option"
                                       }>
                                       {option.option}
                                    </button>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               );
            }
         )}
      </>
   );
}
