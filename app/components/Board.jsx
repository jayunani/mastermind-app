import React from 'react';
import Turns from 'Turns';
import Clues from 'Clues';

class Board extends React.Component{

	render() {
		return (
			<div className='game-board'>
				<Turns/>
				<Clues />
			</div>
		)
	}
}

export default Board;