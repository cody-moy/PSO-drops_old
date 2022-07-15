import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Character from './components/Character';
import ItemCard from './components/ItemCard';

// import Greenill from './assets/Greenill_icon.png';
// import Viridia from './assets/Viridia_icon.png';
// import Bluefull from './assets/Bluefull_icon.png';
// import Oran from './assets/Oran_icon.png';
// import Purplenum from './assets/Purplenum_icon.png';
// import Skyly from './assets/Skyly_icon.png';
// import Pinkal from './assets/Pinkal_icon.png';
// import Whitill from './assets/Whitill_icon.png';
// import Yellowboze from './assets/Yellowboze_icon.png';
// import Redria from './assets/Redria_icon.png';

function App() {
  const [character, setCharacter] = useState({
    name: 'noname',
    class: 'HUmar',
    secID: 'Viridia'
  });
  const [characterMode, setCharacterMode] = useState(false);

  return (
    <div className="App">
      <h1>Ephinea PSO:BB drop database</h1>
      <Character
        character={character}
        setCharacter={setCharacter}
        characterMode={characterMode}
        setCharacterMode={setCharacterMode}
      />
      <ItemCard />
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
}

export default App;
