import { createContext, useContext, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [showGame, setShowGame] = useState(false);
  const [moleHole, setMoleHole] = useState(-1);
  const [score, setScore] = useState(0);
  const numHoles = NUM_HOLES;

  /** Randomize the mole hole to a value that is difirent that its current hole */
  const randomizeMoleHole = () => {
    let newHole;
    do {
      newHole = Math.floor(Math.random() * numHoles);
    } while (newHole === moleHole); // Repeat if the same hole was chosen
    setMoleHole(newHole);
  };

  /** Start or restart the game */
  const startGame = () => {
    // show game screen
    setShowGame(true);
    // reset score
    setScore(0);
    // change mole hole
    randomizeMoleHole();
  };

  /** Hit the mole */
  const hitMole = () => {
    // increment score
    setScore(score + 1);
    // change mole hole
    randomizeMoleHole();
  };

  const value = {
    showGame,
    numHoles,
    moleHole,
    score,
    startGame,
    hitMole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);
  if (!value) {
    throw Error("You must use useGame within GameContext");
  }
  return value;
}
