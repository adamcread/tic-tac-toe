import React from 'react';

import Square from './Square';
import './Board.css';

const Board = (props) => {
    return (
        <div className={`board ${props.winner ? 'board-won' : ''}`}>
            {props.squares.map((square, i) => {
                return (
                    <Square 
                        key={i} 
                        value={square} 
                        squares={props.squares} 
                        square={i}
                        onClick={() => props.onClick(i)} 
                    />
                )
            })}
        </div>
    )
}

export default Board;