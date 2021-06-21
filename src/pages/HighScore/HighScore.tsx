import { useAuth } from "../../context";

export const HighScore = () => {
   const { authState } = useAuth();

   return (
      <div className="d-flex justify-content-center ">
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
      </div>
   );
};
