import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// SQUARE
function Square(props) {
  return (
    //button is build-in component
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// BOARD
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //this is private in board component so cannot change from other component
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //copy original array
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    // pass value(=props) to each Square component
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)} //pass function to Square component when clicked
      />
    );
  }

  render() {
    const status = `Next player ${this.state.xIsNext ? "X" : "O"}`;

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

ReactDOM.render(<Game />, document.getElementById("root")); // render Game component in root
