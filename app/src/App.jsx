import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Board from "./pages/Board";
import NotFound from "./pages/NotFound";
import GameOver from "./pages/GameOver";

function App() {
  const [game, setGame] = useState(null);
  const [players, setPlayers] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/start"
        element={<Start setGame={setGame} setPlayers={setPlayers} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/game"
        element={
          <Board
            game={game}
            setGame={setGame}
            players={players}
            setPlayers={setPlayers}
          />
        }
      />
      <Route
        path="/game-over"
        element={<GameOver game={game} players={players} />}
      />
    </Routes>
  );
}

export default App;
