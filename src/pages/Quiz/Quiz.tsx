import React, { useEffect, useState } from "react";

import { useQuiz } from "../../context";
import { QuestionBank } from "../../database/Quiz.type";
import { quizBeginner } from "../../database/quizBeginner";
import { GamePlay } from "./GamePlay";
import { Instructions } from "./Instructions";
import { GameResults } from "./GameResults";

export function Quiz() {
  const {
    quizState: { selectedQuiz, currentQuestion },
    quizDispatch,
  } = useQuiz();

  const [game, setGame] = useState<QuestionBank | null>(null);

  const [instructions, setInstructions] = useState<boolean>(true);

  const [start, setStart] = useState<boolean>(false);

  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    quizDispatch({ type: "SET_QUIZ", payload: { quiz: quizBeginner } });
  }, []);

  useEffect(() => {
    (() => {
      const instructionsTimer = setTimeout(() => {
        setInstructions(false);
        setStart(true);
      }, 5000);
      return instructionsTimer;
    })();
  }, []);

  useEffect(() => {
    if (selectedQuiz) {
      if (currentQuestion === selectedQuiz.questions.length) {
        setShowResult(true);
        setStart(false);
        quizDispatch({ type: "EVALUATE_RESULTS" });
      }
      setGame(selectedQuiz.questions[currentQuestion]);
    }
  }, [selectedQuiz, currentQuestion]);

  return (
    <>
      {instructions && <Instructions setStart={setStart} setInstructions={setInstructions} />}
      {start && <GamePlay game={game} />}
      {showResult && <GameResults />}
    </>
  );
}
