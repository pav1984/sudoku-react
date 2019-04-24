import React from "react";

const Buttons = props => {
  return (
    <>
      <button onClick={props.handleCheck}>Check</button>
      <button onClick={props.handleNewGame}>New Game</button>
      <button onClick={props.handleSolveBtn}>Solve</button>
      <button onClick={props.handleResetGame}>Restart</button>
    </>
  );
};

export default Buttons;
