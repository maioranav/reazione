import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Components/Homepage/Homepage";
import { Scoreboard } from "./Components/Scoreboard/Scoreboard";
import { NotFound } from "./Components/NotFound/NotFound";
import dictionary from "./dictionary.json";
import "./App.scss";

function App() {
  const getRandomWords = () => {
    const words = Object.values(dictionary.dictionary);
    const shuffledWords = words.sort(() => 0.5 - Math.random());
    const selectedWords = shuffledWords.slice(0, 10);
    console.warn("Rigenero le parole!", selectedWords);
    return selectedWords;
  };

  return (
    <div className="App">
      <header>
        <h1>HEAD</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/play" element={<Scoreboard words={getRandomWords()} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
