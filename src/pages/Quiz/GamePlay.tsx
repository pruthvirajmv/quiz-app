import React from "react";
import quesHero from "../../assets/question-hero.svg";
import "./quiz.css";

import { useQuiz } from "../../context";
import { QuestionBank } from "../../database/Quiz.type";

type GamePropsType = {
  game: QuestionBank | null;
};

export function GamePlay({ game }: GamePropsType) {
  const {
    quizState: { currentQuestion },
    quizDispatch,
  } = useQuiz();

  return (
    <div className="card shadow p-3 mb-5 bg-body rounded align-middle card-question ">
      <img src={quesHero} className="card-img-top" alt="Question" />
      <div className="card-body">
        <h5 className="card-title">Question {currentQuestion + 1}/10</h5>
        <p className="card-text">{game?.question}</p>
      </div>
      <ul className="list-group list-group-flush ">
        {game?.options.map((option) => {
          return (
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-secondary btn-option"
                onClick={() =>
                  quizDispatch({ type: "SELECT_OPTION", payload: { question: game.question, option: option.option } })
                }>
                {option.option}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="card-body">
        <button type="button" className="btn btn-info" onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}>
          Next
        </button>
      </div>
    </div>
  );
}
