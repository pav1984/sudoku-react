import React from "react";
import Tile from "../components/Tile";
import "../components/Board.css";
const Board = props => {
  const board = props.board
    .split("")
    .map((tile, index) => (
      <Tile
        key={index}
        value={tile}
        change={props.change}
        index={index}
        initialBoard={props.initialBoard}
      />
    ));
  return (
    <div className="board">
      {board}
      <span className="line-one" />
      <span className="line-two" />
      <span className="line-three" />
      <span className="line-four" />
    </div>
  );
};

export default Board;
