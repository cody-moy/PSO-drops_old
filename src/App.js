import { useEffect, useState } from 'react';
import Table from './components/Table';
import ItemModal from './components/ItemModal';
import setType from './Utils/setItemType';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const [character, setCharacter] = useState({
    name: 'noname',
    class: 'HUmar',
    secID: 'Viridia'
  });
  const [characterMode, setCharacterMode] = useState(false);
  const [item, setItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showDropRatePercent, setShowDropRatePercent] = useState(false);

  useEffect(() => {
    document.title = 'PSO database';
  }, []);

  useEffect(() => {
    setShowModal(Boolean(item));
  }, [item]);

  return (
    <div className="App">
      <Navbar
        character={character}
        setCharacter={setCharacter}
        characterMode={characterMode}
        setCharacterMode={setCharacterMode}
      />
      <div className="main-content">
        <h1>Ephinea PSO:BB drop database</h1>
        <div className="table-container">
          <Table setItem={setItem} showDropRatePercent={showDropRatePercent} />
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
