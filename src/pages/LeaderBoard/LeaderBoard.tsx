import axios from "axios";
import { useEffect } from "react";
import { useQuiz } from "../../context";
import { backendAPI, checkError } from "../../utils";

export const LeaderBoard = () => {
   const { leaderBoard, setLeaderBoard } = useQuiz();

   const getLeaderBoard = async () => {
      try {
         const {
            data: { leaderBoard },
         } = await axios.get(`${backendAPI}/leaderboard`);
         setLeaderBoard(leaderBoard);
      } catch (error) {
         checkError(error);
         console.log(error);
      }
   };

   useEffect(() => {
      getLeaderBoard();
   }, []);

   return (
      <>
         {leaderBoard.map(({ level, standings }) => {
            return (
               <div key={level}>
                  <h2>{level.toUpperCase()} LeaderBoard</h2>
                  <div className="d-flex justify-content-center">
                     <table className="table table-dark table-hover max-width-60  ">
                        <thead>
                           <tr>
                              <th scope="col">Ranking</th>
                              <th scope="col">Name</th>
                              <th scope="col">Highscore</th>
                           </tr>
                        </thead>
                        <tbody>
                           {standings.map((standing, index) => {
                              return (
                                 <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{standing?.userName}</td>
                                    <td>{standing?.score}</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            );
         })}
      </>
   );
};
