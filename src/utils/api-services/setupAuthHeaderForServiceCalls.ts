import axios from "axios";

export function setupAuthHeaderForServiceCalls(token: String) {
   if (token) {
      token = `Bearer ${token}`;
      return (axios.defaults.headers.common["Authorization"] = token);
   }
   delete axios.defaults.headers.common["Authorization"];
}
