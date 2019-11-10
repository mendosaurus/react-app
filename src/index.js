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
    if(calculateWinner(squares)||squares[i]){
      return;
    }
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else{
      status = `Next player ${this.state.xIsNext ? "X" : "O"}`;
    }
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
