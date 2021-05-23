import React from "react";

import "./quiz.css";

type InstructionsPropsType = {
  setStart: (value: boolean) => void;
  setInstructions: (value: boolean) => void;
};

export function Instructions({ setStart, setInstructions }: InstructionsPropsType) {
  const playBttnHandler = () => {
    setStart(true);
    setInstructions(false);
  };

  return (
    <div className="card shadow-none card-instructions ">
      <div className="card-body ">
        <h5 className="card-title">Quiz Instructions</h5>
        <p className="text-start">
          <i className="fa fa-bullhorn" aria-hidden="true"></i> For every correct answer 2 points will be rewarded{" "}
        </p>
        <p className="text-start">
          <i className="fa fa-bullhorn" aria-hidden="true"></i> For every wrong answer 1 point will be deducted
        </p>
        <button className="btn btn-primary" onClick={playBttnHandler}>
          Play
        </button>
      </div>
    </div>
  );
}
