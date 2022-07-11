import { useEffect, useState, useRef } from 'react';
import './App.css';
import Difficulty from './components/Difficulty';
import monsterDrops from './data/MONSTER_DROPS';
import boxDrops from './data/BOX_DROPS';
import Table from './components/Table';
import Character from './components/Character';

function App() {
  const [character, setCharacter] = useState({
    name: 'noname',
    class: 'HUmar',
    secID: 'Viridia'
  });

  return (
    <div className="App">
      <h1>Ephinea PSO:BB drop database</h1>
      <Character character={character} setCharacter={setCharacter} />
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}

export default App;
