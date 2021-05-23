import React from "react";

import "./quiz.css";

import { useNavigate } from "react-router";
import { useQuiz } from "../../context";

export function GameResults() {
  const {
    quizState: { selectedQuiz },
  } = useQuiz();

  const navigate = useNavigate();

  return (
    <>
      <div className="card text-start card-report">
        <h5 className="card-header">Quiz Results</h5>
        <div className="card-body">
          <h5 className="card-title">Your Score : {selectedQuiz?.score || 0}/20 </h5>
          <p className="card-text">
            {(selectedQuiz?.score || 0) > 15 && "Well played! Awesome"}
            {(selectedQuiz?.score || 0) > 10 && "Good Job!"}
            {(selectedQuiz?.score || 0) < 10 && "Not bad! Try again"}
          </p>
          <button type="button" className="btn btn-info" onClick={() => navigate("/home")}>
            Home
          </button>
        </div>
      </div>
      {selectedQuiz?.questions.map((question, index) => {
        return (
          <div className="container card-question">
            <div className="card shadow p-3 mb-5 bg-body rounded align-middle ">
              <div className="card-body">
                <h5 className="card-title">Question {index + 1}</h5>
                <p
                  className={
                    question?.options.some((option) => option.isCorrect && option.isSelected)
                      ? "badge bg-success"
                      : "badge bg-danger"
                  }>
                  Points :{" "}
                  <span>
                    {question?.options.some((option) => option.isCorrect && option.isSelected)
                      ? question.points
                      : question?.negativePoints || 0}
                  </span>
                </p>
                <p className="card-text">{question?.question}</p>
              </div>
              <ul className="list-group list-group-flush ">
                {question?.options.map((option) => {
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
      })}

      <div>
        <button type="button" className="btn btn-info" onClick={() => navigate("/home")}>
          Done
        </button>
      </div>
    </>
  );
}
