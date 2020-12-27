import React from 'react';
import './App.css';
import GameTable from './components/GameTable';

function App() {

  const game = [["#32a852",undefined,"#32a852"],["#1532eb","#32a852",undefined],["#1532eb","#32a852","#1532eb"]];

  return (
    <div className="page">
      <GameTable matrix={game} />
    </div>
  );
}

export default App;
