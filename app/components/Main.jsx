import React from 'react';
import Nav from 'Nav';
import Colors from 'Colors';
import Board from 'Board';

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: ''
    }
  }

  clickedColor() {

  }

  render() {
  return (
      <div>	
        <Nav/>
        <div>
          <Colors />
          <Board />
        </div>
      </div>
    );
  }
}

export default Main;