import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context";
import { AuthContextProvider } from "./context";

ReactDOM.render(
   <React.StrictMode>
      <AuthContextProvider>
         <QuizContextProvider>
            <Router>
               <App />
            </Router>
         </QuizContextProvider>
      </AuthContextProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
