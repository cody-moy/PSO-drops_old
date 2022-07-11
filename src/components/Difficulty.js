import React, { useState, useEffect } from 'react';
import Table from './Table';
import { secIDs } from '../data/miscData';
import monsterDrops from '../data/MONSTER_DROPS';

function Difficulty({ difficulty }) {
  return (
    <div className="difficulty-container">
      <h1>{difficulty}</h1>
      {JSON.stringify(monsterDrops[difficulty])}
    </div>
  );
}

export default Difficulty;
