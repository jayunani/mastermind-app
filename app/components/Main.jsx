import React from 'react';
import Nav from 'Nav';
import Board from 'Board';

class Main extends React.Component{

  render() {
  return (
      <div>	
        <Nav/>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default Main;