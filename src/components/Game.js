import React, { useState } from 'react';
import Voard from './Voard';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    // Check for a winner
    // Return 'X', 'O', or null
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square)
    ? 'Draw'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="status">{status}</div>
        <Voard squares={squares} onClick={handleClick} />
      </div>
    </div>
  );
}

export default Game;
