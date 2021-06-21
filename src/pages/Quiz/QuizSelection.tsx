import axios from "axios";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context";
import { backendAPI, checkError, QuizDispatchTypeEnum } from "../../utils";

export function QuizSelection() {
   const { quizDispatch } = useQuiz();

   const loadQuiz = async (level: string) => {
      try {
         const {
            data: { quiz },
         } = await axios({
            method: "POST",
            url: `${backendAPI}/quiz`,
            data: { selectedLevel: level },
         });
         quizDispatch({
            type: QuizDispatchTypeEnum.SET_QUIZ,
            payload: { quizType: level, questions: quiz.questions },
         });
      } catch (error) {
         checkError(error);
         console.log(error.response.data.message);
      }
   };

   return (
      <div className=" d-flex gap-5 align-items-center justify-content-center container-levels">
         <div className="card card-quiz-level shadow-lg">
            <div className="card-body">
               <h5 className="card-title">Beginner</h5>
               <p className="card-text">
                  Begin with small steps. Play this level to know your basics
               </p>
               <Link to="/playquiz/beginner">
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => loadQuiz("beginner")}>
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
   );
}
