import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Homepage } from "./Components/Homepage/Homepage";
import { Scoreboard } from "./Components/Scoreboard/Scoreboard";
import { NotFound } from "./Components/NotFound/NotFound";
import dictionary from "./dictionary.json";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const { pathname } = useLocation();
  const [words, setWords] = useState<string[]>([]);

  const getRandomWords = () => {
    const words = Object.values(dictionary.dictionary);
    const shuffledWords = words.sort(() => 0.5 - Math.random());
    const selectedWords = shuffledWords.slice(0, 10);
    console.warn("Rigenero le parole!", selectedWords);
    setWords(selectedWords);
  };

  useEffect(() => {
    if (pathname === "/") getRandomWords();
  }, [pathname]);

  return (
    <div className="App">
      <header>
        <h1>HEAD</h1>
      </header>
      <main>
        <Outlet />
        {pathname === "/play" && <Scoreboard words={words} />}
      </main>
    </div>
  );
}

export default App;
