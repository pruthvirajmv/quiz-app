import "./App.css";
import { AppNavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz } from "./pages";

function App() {
  return (
    <div className="App">
      <AppNavBar />

      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playquiz/:level" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
