import React from 'react';

import Game from './scr/components/Game';

class App extends React.Component {
  render() {
    return (
      <Game randomNumberCount={6} initialSeconds={10} />
    );
  }
}


export default App;
