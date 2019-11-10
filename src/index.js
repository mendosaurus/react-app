import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// SQUARE
class Square extends React.Component {
  constructor(props) {
    super(props);
    //initialize state to keep status of Square
    this.state = {
      value: null
    };
  }
  render() {
    // render() returns React element(= explanation of what you want to render on screen)
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

// BOARD
class Board extends React.Component {
  renderSquare(i) {
    // pass value props to Square
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status"> {status} </div>
        <div className="board-row">
          {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// GAME
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> {/* status */} </div> <ol> {/* TODO */} </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root")); // render Game in root
