import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { numHoles, moleHole } = useGame();
  return (
    <section className="game-board">
      {Array.from({ length: numHoles }).map((_, i) => (
        <Hole key={i} hasMole={i === moleHole} />
      ))}
    </section>
  );
}
