import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { numHoles, moleHole } = useGame();
  return (
    <ol className="game-board">
      {Array.from({ length: numHoles }).map((_, i) => (
        <Hole key={i} hasMole={i === moleHole} />
      ))}
    </ol>
  );
}
