import GameBoard from "./GameBoard";
import { useGame } from "./GameContext";
import GameInfo from "./GameInfo";
import Welcome from "./Welcome";

export default function App() {
  const { showGame } = useGame();
  return (
    <>
      <header>
        <h1>Whack a Mole</h1>
      </header>
      <main>
        {!showGame ? (
          <Welcome />
        ) : (
          <>
            <GameInfo />
            <GameBoard />
          </>
        )}
      </main>
    </>
  );
}
