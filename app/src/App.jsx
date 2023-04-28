import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

function App() {
  const [game, setGame] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start setGame={setGame} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/game" element={<Game game={game} setGame={setGame} />} />
    </Routes>
  )
}

export default App
