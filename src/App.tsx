import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Components/Homepage/Homepage";
import { Scoreboard } from "./Components/Scoreboard/Scoreboard";
import { NotFound } from "./Components/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <h1>HEAD</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/play" element={<Scoreboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
