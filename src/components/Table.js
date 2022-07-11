import React, { useState, useEffect } from 'react';
import { secIDs } from '../data/miscData';
import monsterDrops from '../data/MONSTER_DROPS';
import boxDrops from '../data/BOX_DROPS';
import Character from './Character';

function Table(props) {
  const [difficulty, setDifficulty] = useState('ultimate');
  const [episodes, setEpisodes] = useState([]);
  console.log('monster drops:', monsterDrops);

  useEffect(() => {
    setEpisodes(monsterDrops[difficulty]);
  }, [difficulty]);
  return (
    <div>
      <div className="difficulty-selector">
        <button onClick={() => setDifficulty('ultimate')}>Ultimate</button>
        <button onClick={() => setDifficulty('vhard')}>Very Hard</button>
        <button onClick={() => setDifficulty('hard')}>Hard</button>
        <button onClick={() => setDifficulty('normal')}>Normal</button>
      </div>
      <h3>Drop table for {difficulty}</h3>
      <div className="episode-wrapper"></div>
    </div>
  );
}

export default Table;
