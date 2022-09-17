import { useEffect, useMemo, useState } from 'react';
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
  const [difficulty, setDifficulty] = useState('ultimate');
  const [episodeFilter, setEpisodeFilter] = useState([true, true, true]);
  const [characterMode, setCharacterMode] = useState(false);
  const [item, setItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showDropRatePercent, setShowDropRatePercent] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'PSO database';
  }, []);

  useEffect(() => {
    setShowModal(Boolean(item));
  }, [item]);

  const changeEpFilter = useMemo((episode, value) => {
    if (episode === 'all') {
      setEpisodeFilter([true, true, true]);
      return;
    }
    // if we're about to deselect the last active one
    // (leaving us with no filters), prevent doing so
    if (episodeFilter.reduce((prev, a) => prev + a, 0) > 1 || value === true) {
      let temp = [...episodeFilter];
      temp[episode] = value;
      setEpisodeFilter(temp);
    }
  }, []);

  // memo-izing the Table so it doesn't re-render for every keystroke in the search bar
  const table = useMemo(
    () => (
      <Table
        difficulty={difficulty}
        setItem={setItem}
        showDropRatePercent={showDropRatePercent}
        episodeFilter={episodeFilter}
        setEpisodeFilter={setEpisodeFilter}
        changeEpFilter={changeEpFilter}
        search={search.toLowerCase()}
      />
    ),
    [difficulty, showDropRatePercent, episodeFilter, changeEpFilter, search]
  );

  return (
    <div className="App">
      <Navbar
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        character={character}
        setCharacter={setCharacter}
        characterMode={characterMode}
        setCharacterMode={setCharacterMode}
        episodeFilter={episodeFilter}
        changeEpFilter={changeEpFilter}
        setSearch={setSearch}
      />
      <div className="main-content">
        <div className="table-container">{table}</div>
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
