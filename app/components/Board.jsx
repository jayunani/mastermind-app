import React from 'react';
import Turns from 'Turns';
import Clues from 'Clues';
import Colors from 'Colors';

class Board extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      clicked: ''
    }
  }

	render() {
		return (
			<div className='game-board'>
				<div className='turns-clues'>
					<Turns/>
					<Clues />
				</div>
				<div className='color-options'>
					<Colors />
				</div>
			</div>
		)
	}
}

export default Board;