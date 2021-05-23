import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/home_hero.svg";
import { useQuiz } from "../../context";
import "./home.css";

export function Home() {
  const { quizDispatch } = useQuiz();

  useEffect(() => quizDispatch({ type: "RESET" }), []);

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

      <div className=" d-flex gap-5 align-items-center justify-content-center container-levels">
        <div className="card card-quiz-level shadow-lg">
          <div className="card-body">
            <h5 className="card-title">Beginner</h5>
            <p className="card-text">Begin with small steps. Play this level to know your basics</p>
            <Link to="/playquiz/beginner">
              <button type="button" className="btn btn-primary">
                Play
              </button>
            </Link>
          </div>
        </div>

        <div className="card card-quiz-level shadow-lg">
          <div className="card-body">
            <h5 className="card-title">Intermediate</h5>
            <p className="card-text">Level up your knowledge. Let's check your growth</p>
            <Link to="/playquiz/beginner">
              <button type="button" className="btn btn-primary">
                Play
              </button>
            </Link>
          </div>
        </div>

        <div className="card card-quiz-level shadow-lg">
          <div className="card-body">
            <h5 className="card-title">Advance</h5>
            <p className="card-text">This is not the end. Because growing never ends</p>
            <Link to="/playquiz/beginner">
              <button type="button" className="btn btn-primary">
                Play
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
