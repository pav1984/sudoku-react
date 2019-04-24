import React from "react";
import "../components/Tile.css";

const Tile = props => {
  let value = props.value;
  let isDisabled = null;
  let initialBoard = props.initialBoard.split("");
  isDisabled = props.value !== "." && initialBoard[props.index] !== ".";

  if (props.value === ".") {
    value = "";
  }
  return (
    <div className="tile">
      <input
        disabled={isDisabled}
        type="number"
        min="1"
        max="9"
        value={value}
        onChange={e => props.change(props.index, e.target.value)}
      />
    </div>
  );
};

export default Tile;
