import React from 'react';
import Square from './Square';
import { calculateWinner } from './util/utilityFunction';

class Board extends React.Component {
    renderSquare(i) {
      const squares = this.props.squares;
      return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
    }
    render() {
      const {squares, nextPlayer} = this.props;
      const winner = calculateWinner(squares);
      let status = '';
      if(winner === null && !squares.includes(null)){
        status = "it's draw"
      } else {
        status= winner === null ? 'Next player: ' + (nextPlayer ? 'X' : 'O') : 'Winner: ' + winner;
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
export default Board;
