import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/home_hero.svg";
import { useQuiz } from "../../context";
import "./home.css";
import { QuizDispatchTypeEnum } from "../../utils";

export function Home() {
   const { quizDispatch } = useQuiz();

   useEffect(() => quizDispatch({ type: QuizDispatchTypeEnum.RESET }), [quizDispatch]);

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col">
                  <p className="display-6 text-start">
                     How well you know about the badminton game? Play quiz, evaluate, learn and grow
                  </p>
               </div>
               <div className="col">
                  <img className="img-fluid" src={hero} alt={"quiz hero"} />
               </div>
            </div>
         </div>

         <div className="">
            <Link to="/playquiz/selection">
               <button type="button" className="btn btn-primary">
                  Play
               </button>
            </Link>
         </div>
      </>
   );
}
