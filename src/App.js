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

  const addTypeToMonsterDrops = () => {
    let temp = monsterDrops;

    console.log('begin processing...');

    let difficulties = ['ultimate', 'vhard', 'hard', 'normal'];

    for (let diff = 0; diff < 4; diff++) {
      for (
        let episode = 0;
        episode < temp[difficulties[diff]].episodes.length;
        episode++
      ) {
        for (
          let area = 0;
          area < temp[difficulties[diff]].episodes[episode].areas.length;
          area++
        ) {
          for (
            let source = 0;
            source <
            temp[difficulties[diff]].episodes[episode].areas[area].drops.length;
            source++
          ) {
            for (let secId = 0; secId < 10; secId++) {
              if (
                temp[difficulties[diff]].episodes[episode].areas[area].drops[
                  source
                ].items[secId].itemName
              ) {
                temp[difficulties[diff]].episodes[episode].areas[area].drops[
                  source
                ].items[secId] = setType(
                  temp[difficulties[diff]].episodes[episode].areas[area].drops[
                    source
                  ].items[secId]
                );
              }
            }
          }
        }
      }
    }

    localStorage.setItem('ultimate', JSON.stringify(temp));
  };

  return (
    <div className="App">
      <h1>Ephinea PSO:BB drop database</h1>
      <Character
        character={character}
        setCharacter={setCharacter}
        characterMode={characterMode}
        setCharacterMode={setCharacterMode}
      />
      <button style={{ margin: '4rem 1rem' }} onClick={addTypeToMonsterDrops}>
        Test search
      </button>
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
  );
}

export default App;
