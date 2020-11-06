import React from "react";

import "./Square.css";

const Square = (props) => {
	const style = `squares ${props.squares[props.square] ? 'placed' : ''}` 
	return (
		<button className={style} onClick={props.onClick}>
			{props.value}
		</button>
	);
};

export default Square;