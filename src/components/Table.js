import React, { useState, useEffect } from 'react';
import { secIDs } from '../data/miscData';
import monsterDrops from '../data/MONSTER_DROPS';
import boxDrops from '../data/BOX_DROPS';
import Character from './Character';

import './styles/Table.css';

function Table(props) {
  const [difficulty, setDifficulty] = useState('ultimate');
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodes(monsterDrops[difficulty].episodes);
  }, [difficulty]);

  return (
    <div>
      <div className="difficulty-selector">
        <p>View drop table by difficulty</p>
        <div>
          <button onClick={() => setDifficulty('ultimate')}>Ultimate</button>
          <button onClick={() => setDifficulty('vhard')}>Very Hard</button>
          <button onClick={() => setDifficulty('hard')}>Hard</button>
          <button onClick={() => setDifficulty('normal')}>Normal</button>
        </div>
      </div>
      <h2>Drop table for {difficulty}</h2>
      {episodes.length > 0 && (
        <div className="episode-wrapper">
          {episodes.map(episode => {
            return (
              <div className="table__episode-container" id={episode.name}>
                <>
                  <h3 className="table__episode-name">
                    {episode.name.toUpperCase()}
                  </h3>
                  {episode.areas.map(area => {
                    return (
                      <div className="table__area-container" id={area.name}>
                        <>
                          <h4 className="table__area-name">{area.name}</h4>
                          {area.drops.map(dropSource => {
                            return (
                              <div
                                className="table__drop-source-container"
                                id={dropSource.source}
                              >
                                <div className="table__row">
                                  <div className="table__drop-source-name-container">
                                    <p>{dropSource.source}</p>
                                  </div>
                                  {dropSource.items.map(item => {
                                    return (
                                      <div className="table__item-container">
                                        <p className="table__item-secID">
                                          {item.secID}
                                        </p>
                                        <p
                                          className={`table__item-name ${
                                            item.itemName ? '' : 'no-drop'
                                          }`}
                                        >
                                          {item.itemName || 'N/A'}
                                        </p>
                                        <p>
                                          Drop rate:{' '}
                                          <span className="table__drop-rate">
                                            1/{item.dropRate}
                                          </span>
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </>
                      </div>
                    );
                  })}
                </>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Table;
