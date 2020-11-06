import React, { useState } from 'react';
import checkWin from './checkWin';

import Board from "./components/Board";
import './App.css';

const App = () => {
	const [nextPlayer, setNextPlayer] = useState("X");
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [winner, setWinner] = useState(null);

	const handleClick = (i) => {
		let current = [...history[history.length - 1]];

		current[i] = nextPlayer;
		setWinner(checkWin(current));

		setNextPlayer(nextPlayer === "X" ? "O" : "X")
		setHistory([...history, current]);
	}

	const undoClick = () => {
		const x = [...history];
		if (x.length === 1) return;
		
		x.pop();

		setHistory(x);
		setNextPlayer(nextPlayer === "X" ? "O" : "X");
		setWinner(null);
	}

	const resetClick = () => {
		setNextPlayer("X");
		setHistory([Array(9).fill(null)]);
		setWinner(null);
	}

	return (
		<>
			<div className="title">
				<h1>Tic Tac Toe</h1>

				<h2 className={`winner-text ${winner ? "" : "none"}`}>{winner ? `${winner} has won` : ''}</h2>
			</div>

			
			<Board 
				winner={winner} 
				squares={history[history.length-1]} 
				onClick={handleClick} 
			/>

			<div className="options">
				<span onClick={undoClick}>undo</span>
				<span onClick={resetClick}>reset</span>
			</div>
		</>
	);
}

export default App;
