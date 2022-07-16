import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Character from './components/Character';
import ItemModal from './components/ItemModal';
import setType from './Utils/setItemType';

import monsterDrops from './data/MONSTER_DROPS';

function App() {
  const [character, setCharacter] = useState({
    name: 'noname',
    class: 'HUmar',
    secID: 'Viridia'
  });
  const [characterMode, setCharacterMode] = useState(false);
  const [item, setItem] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = 'PSO database';
  }, []);

  useEffect(() => {
    setShowModal(Boolean(item));
  }, [item]);

  return (
    <div className="App">
      <h1>Ephinea PSO:BB drop database</h1>
      <div className="main-content">
        <Character
          character={character}
          setCharacter={setCharacter}
          characterMode={characterMode}
          setCharacterMode={setCharacterMode}
        />
        <div className="table-container">
          <Table setItem={setItem} />
        </div>
        <ItemModal
          visible={showModal}
          close={() => setShowModal(false)}
          item={item}
          setItem={setItem}
        />
      </div>
    </div>
  );
}

export default App;
