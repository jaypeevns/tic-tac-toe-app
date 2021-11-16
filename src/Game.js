import React from 'react';
import Board from './Board';
import { calculateWinner } from './util/utilityFunction';

class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
    handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
  
      squares[i] = this.state.xIsNext ? 'X' : 'O';
  
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) ? false : true,
      });
    }
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const moves = history.map((step, move) => {
        const desc = move ? 'Move #' + move : 'Game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              {desc}
            </button>
          </li>
        );
      });
  
      return (
        <div className="game">
          <div>
            <Board
              squares={current.squares}
              nextPlayer={this.state.xIsNext}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  export default Game;
