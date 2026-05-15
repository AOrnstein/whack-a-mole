import { useGame } from "./GameContext";

export default function GameInfo() {
  const { score, startGame } = useGame();
  return (
    <div className="game-info">
      <p>Score: {score}</p>
      <button onClick={() => startGame()}>Restart</button>
    </div>
  );
}
