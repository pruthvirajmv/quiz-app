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
         <div className="card bg-transparent border-0 p-4">
            <div className="row mw-100">
               <div className=" col-md-4">
                  <img className="img-fluid" src={hero} alt={"quiz hero"} />
               </div>
               <div className="col-md-8 align-self-center">
                  <p className="display-6 text-start ">
                     How well you know about the badminton game? Play quiz, evaluate, learn and grow
                  </p>
                  <div className="p-5">
                     <Link to="/playquiz/selection">
                        <button type="button" className="btn btn-primary btn-play">
                           Play
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <h4 className="mt-5 m-4">Watch Videos to Learn More</h4>
         <div className=" d-flex gap-5 align-items-center justify-content-center container-levels p-4">
            <a
               className="card-video"
               href="https://baddyshots.netlify.app/S-mjwgMvzoA"
               target="_blank"
               rel="noreferrer">
               <img
                  src="https://i.ytimg.com/vi/S-mjwgMvzoA/hqdefault.jpg?rs=AOn4CLAYrkQdf0_PD3n61cWSLSQYkszUYA&sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D"
                  className="img-fluid"
                  alt="beginner"></img>
            </a>
            <a
               className="card-video"
               href="https://baddyshots.netlify.app/S-mjwgMvzoA"
               target="_blank"
               rel="noreferrer">
               <img
                  src="https://i.ytimg.com/vi/92gCzJBNLcI/hq720.jpg?rs=AOn4CLCJjQypVaLDy3BGP_Ju2igYDaHeEw&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D"
                  className="img-fluid"
                  alt="beginner"></img>
            </a>
            <a
               className="card-video"
               href="https://baddyshots.netlify.app/S-mjwgMvzoA"
               target="_blank"
               rel="noreferrer">
               <img
                  src="https://i.ytimg.com/vi/dsyGElreEWU/hq720.jpg?rs=AOn4CLCv0OoHtGMGm6muFl5YUgcyQ-xjRw&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D"
                  className="img-fluid"
                  alt="beginner"></img>
            </a>
         </div>
      </>
   );
}
