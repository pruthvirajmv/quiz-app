import { useAuth } from "../context";
import { Navigate, Route } from "react-router-dom";

type PrivateRouteParam = {
   path: string;
   element: React.ReactElement;
};

export const PrivateRoute = ({ path, element }: PrivateRouteParam) => {
   const { authState } = useAuth();

   return authState.token ? (
      <Route path={path} element={element}></Route>
   ) : (
      <Navigate state={{ from: path }} replace to="/login" />
   );
};
