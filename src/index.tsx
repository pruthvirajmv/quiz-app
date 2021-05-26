import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context";

ReactDOM.render(
   <React.StrictMode>
      <QuizContextProvider>
         <Router>
            <App />
         </Router>
      </QuizContextProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
