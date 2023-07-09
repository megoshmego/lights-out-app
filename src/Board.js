import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let board = [];
    for (let y = 0; y < nrows; y++) {
        let row = [];
        for (let x = 0; x < ncols; x++) {
            row.push(Math.random() < chanceLightStartsOn);
        }
        board.push(row);
    }
    return board;
  }

  function hasWon() {
    return board.every(row => row.every(cell => !cell));
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
          if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
              boardCopy[y][x] = !boardCopy[y][x];
          }
      };

      const boardCopy = oldBoard.map(row => [...row]);
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      return boardCopy;
    });
  }

  if (hasWon()) {
    return <h1>You won!</h1>;
  }

  return (
    <table className="Board">
        <tbody>
            {board.map((row, y) =>
                <tr key={y}>
                    {row.map((cell, x) =>
                        <Cell key={`${y}-${x}`} isLit={cell} flipCellsAroundMe={() => flipCellsAround(`${y}-${x}`)} />
                    )}
                </tr>
            )}
        </tbody>
    </table>
  );
}

export default Board;
