import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export const HighScore = () => {
   const { authState } = useAuth();
   const navigate = useNavigate();

   return (
      <>
         <h2>Your Highscores</h2>
         <div className="d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-dark table-hover max-width-40 ">
               <thead>
                  <tr>
                     <th scope="col">Type</th>
                     <th scope="col">Attempts</th>
                     <th scope="col">Highscore</th>
                  </tr>
               </thead>
               <tbody>
                  {authState.highScore?.map((current, index) => {
                     return (
                        <tr key={index}>
                           <td>{current.level}</td>
                           <td>{current.attempts}</td>
                           <td>{current.score}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
            {authState.highScore?.length === 0 && (
               <div>
                  <p className="text-center">
                     No highscore found{" "}
                     <button
                        className="btn btn-outline-info btn-sm text-white"
                        onClick={() => navigate("/playquiz/selection")}>
                        Play Now
                     </button>
                  </p>
               </div>
            )}
         </div>
      </>
   );
};
