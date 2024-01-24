import React, { useState } from "react";
import Square from "./Square";
import { useEffect } from "react";
import toast from "react-hot-toast";

const PLAYER_X = "X";
const PLAYER_O = "O";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [playerXScore, setPlayerXScore] = useState(0);
  const [playerOScore, setPlayerOScore] = useState(0);

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = playerTurn ? "X" : "O";
    setSquares(newSquares);
    setPlayerTurn(!playerTurn);

    const winner = calculateWinner(newSquares);
    if (winner) {
      if (winner === "X") {
        setPlayerXScore(playerXScore + 1);
        toast.success(" X Win");
        // Save scores to local storage
        localStorage.setItem("playerXScore", playerXScore + 1);
      } else if (winner === "O") {
        setPlayerOScore(playerOScore + 1);
        toast.success("O win");
        // Save scores to local storage

        localStorage.setItem("playerOScore", playerOScore + 1);
      }
    }
  };

  useEffect(() => {
    // Retrieve scores from local storage when the component mounts
    const storedPlayerXScore = localStorage.getItem("playerXScore");
    const storedPlayerOScore = localStorage.getItem("playerOScore");

    if (storedPlayerXScore) {
      setPlayerXScore(parseInt(storedPlayerXScore, 10));
    }
    if (storedPlayerOScore) {
      setPlayerOScore(parseInt(storedPlayerOScore, 10));
    }
  }, []);

  const renderSquare = (i) => {
    return (
      <Square
        playerTurn={playerTurn}
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square)
    ? "Draw"
    : `Next player: ${playerTurn ? "X" : "O"}`;

  const resetGame = () => {
    // Clear the game board (squares)
    setSquares(Array(9).fill(null));

    // Reset player scores
    setPlayerXScore(0);
    setPlayerOScore(0);

    // Clear local storage
    localStorage.removeItem("playerXScore");
    localStorage.removeItem("playerOScore");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" flex flex-col items-center gap-2 ">
        <div
          className={` ${
            winner === "X"
              ? " text-blue-700 font-bold text-3xl"
              : winner === "O"
              ? " text-red-700 font-bold text-3xl "
              : " text-yellow-600 font-bold text-3xl"
          } `}
        >
          {status}
        </div>
        <div className=" flex gap-7 text-white font-semibold">
          <div className=" text-blue-500">
            Player X : <span className=" font-bold">{playerXScore}</span>{" "}
          </div>
          <div className=" text-red-500">Player O : {playerOScore}</div>
        </div>
        <div className=" grid grid-cols-3 grid-rows-3 gap-1">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>

        <button
          className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
          onClick={() => setSquares(Array(9).fill(null))}
        >
          New Game
        </button>
        <button
          className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
          onClick={resetGame}
        >
          {" "}
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
