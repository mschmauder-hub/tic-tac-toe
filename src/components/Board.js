import "./board.css";
import React from "react";
import Square from "./Square";
import { calculateWinner } from "../api/game";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsActive, setXIsActive] = React.useState(true);

  const nextPlayer = xIsActive ? "X" : "O";

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = "Draw";
  } else {
    status = `Next Player:  ${nextPlayer}`;
  }

  console.log(squares);

  const handeClick = (index) => {
    const squaresNew = [...squares];
    if (winner || squaresNew[index] !== null) return;
    squaresNew[index] = nextPlayer;
    setSquares(squaresNew);
    setXIsActive(!xIsActive);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onClick={() => handeClick(0)} />
        <Square value={squares[1]} onClick={() => handeClick(1)} />
        <Square value={squares[2]} onClick={() => handeClick(2)} />
        <Square value={squares[3]} onClick={() => handeClick(3)} />
        <Square value={squares[4]} onClick={() => handeClick(4)} />
        <Square value={squares[5]} onClick={() => handeClick(5)} />
        <Square value={squares[6]} onClick={() => handeClick(6)} />
        <Square value={squares[7]} onClick={() => handeClick(7)} />
        <Square value={squares[8]} onClick={() => handeClick(8)} />
      </div>
    </div>
  );
}
