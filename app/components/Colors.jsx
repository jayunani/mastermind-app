import React from 'react';

class Colors extends React.Component {
	constructor(props) {
    super(props);

  }
	clickedColor() {
		console.log('clicked');
	}

	render() {
		return (
			<div className='example-colors'>
				<div className='color-pegs cp-1' onClick={this.clickedColor}> </div>
				<div className='color-pegs cp-2'> </div>
				<div className='color-pegs cp-3'> </div>
				<div className='color-pegs cp-4'> </div>
				<div className='color-pegs cp-5'> </div>
				<div className='color-pegs cp-6'> </div>
			</div>
		)
	}
}

export default Colors;