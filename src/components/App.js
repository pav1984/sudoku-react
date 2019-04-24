import React, { Component } from "react";
import "../components/App.css";
import sudoku from "sudoku-umd";
import Board from "../components/Board";
import SelectLevel from "../components/SelectLevel";
import Buttons from "../components/Buttons";
class App extends Component {
  state = {
    initialBoard: "",
    board: "",
    level: "easy"
  };
  handleNewGame = () => {
    const sudokuGenerate = sudoku.generate(this.state.level);
    this.setState({
      initialBoard: sudokuGenerate,
      board: sudokuGenerate
    });
  };
  handleChange = (index, value) => {
    if (value > 0 && value <= 9) {
      const board = this.state.board;
      const boardCheck = board.slice(0, index) + value + board.slice(index + 1);
      this.setState({
        board: boardCheck
      });
    }
  };
  handleResetGame = () => {
    this.setState({
      board: this.state.initialBoard
    });
  };
  handleSolveBtn = () => {
    const boardSolve = sudoku.solve(this.state.board);
    if (boardSolve) {
      this.setState({
        board: boardSolve
      });
    } else {
      alert(`It's wrong !!!`);
    }
  };
  handleCheck = () => {
    const checkBoard = sudoku.solve(this.state.board);
    if (checkBoard) {
      alert(`That's right.Keep Going!!! `);
    } else {
      alert(`It's wrong !!!. Your sudoku must be corrected`);
    }
  };
  handleLevelChange = e => {
    this.setState({
      level: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Sudoku</h1>
        <Board
          board={this.state.board}
          change={this.handleChange}
          initialBoard={this.state.initialBoard}
        />
        <div className="buttons">
          <SelectLevel
            change={this.handleLevelChange}
            value={this.state.level}
          />
          <Buttons
            handleCheck={this.handleCheck}
            handleNewGame={this.handleNewGame}
            handleSolveBtn={this.handleSolveBtn}
            handleResetGame={this.handleResetGame}
          />
        </div>
      </div>
    );
  }
}

export default App;
