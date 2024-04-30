import { Outlet, useLocation } from "react-router-dom";
import { Scoreboard } from "./Components/Scoreboard/Scoreboard";
import dictionary from "./dictionary.json";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const { pathname } = useLocation();
  const [words, setWords] = useState<string[]>([]);

  const getRandomWords = () => {
    const words = Object.values(dictionary.dictionary);
    const shuffledWords = words.sort(() => 0.5 - Math.random());
    const selectedWords = shuffledWords.slice(0, 10); // TODO: change to max value needed
    console.warn("Rigenero le parole!", selectedWords);
    setWords(selectedWords);
  };

  useEffect(() => {
    if (pathname === "/") getRandomWords();
  }, [pathname]);

  return (
    <div className="App">
      <header>
        <h1 className="text-center my-2">Reazione a Catena!!</h1>
        <p className="text-center my-2">sviluppato in una notte e mezza da vincenzomaiorana.it</p>
      </header>
      <main>{pathname === "/play" ? <Scoreboard words={words} /> : <Outlet />}</main>
    </div>
  );
}

export default App;
