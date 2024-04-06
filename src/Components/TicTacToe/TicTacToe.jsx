import React, { useEffect, useState } from "react";
import style from "./TicTacToe.module.css";

function Square({ value, handleClickSquare }) {
  return (
    <button className={style.square} onClick={handleClickSquare}>
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [statusGame, setStatusGame] = useState("");

  console.log(squares);

  function handleClickSquare(indexCurrentSquare) {
    if (checkWinner() || squares[indexCurrentSquare]) return;

    let cpySquares = [...squares];
    cpySquares[indexCurrentSquare] = isXTurn ? "X" : "O";

    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function checkWinner() {
    const patternWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < patternWinner.length; i++) {
      const [x, y, z] = patternWinner[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handelResetGame() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatusGame(`Next Player is ${isXTurn ? "X" : "O"}`);
  }

  useEffect(() => {
    console.log(checkWinner());
    if (!checkWinner() && squares.every((item) => item)) {
      setStatusGame("This is a draw ! Please restart the game");
    } else if (checkWinner()) {
      setStatusGame(`Winner is ${checkWinner()}, Please restart the game`);
    } else {
      setStatusGame(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares]);

  return (
    <div className={style.tictactoeContainer} id="ticTacToe">
      <h2>10.TicTacToe</h2>
      <div className={style.board}>
        {squares.map((item, i) => (
          <Square
            key={i}
            value={item}
            handleClickSquare={() => handleClickSquare(i)}
          />
        ))}
      </div>
      <button onClick={handelResetGame} className={style.resetGame}>
        Reset Game
      </button>
      <h3>{statusGame}</h3>
    </div>
  );
};

export default TicTacToe;
