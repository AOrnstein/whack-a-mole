import { useGame } from "./GameContext";

export default function Hole({ hasMole }) {
  const { hitMole } = useGame();

  return (
    <li
      className={"hole" + (hasMole ? " mole" : "")}
      onClick={() => (hasMole ? hitMole() : null)}
    ></li>
  );
}
