import React, { useState, useEffect } from 'react';
import { secIDs } from '../data/miscData';
import monsterDrops from '../data/MONSTER_DROPS';
import boxDrops from '../data/BOX_DROPS';
import Character from './Character';
import Button from './Button';
import Checkbox from './Checkbox';

import './styles/Table.css';

function Table(props) {
  const [difficulty, setDifficulty] = useState('ultimate');
  const [episodeFilter, setEpisodeFilter] = useState([true, true, true]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodes(monsterDrops[difficulty].episodes);
  }, [difficulty]);

  useEffect(() => {
    console.log('episodeFilter:', episodeFilter);
  }, [episodeFilter]);

  const changeEpFilter = (episode, value) => {
    console.log('episode:', episode);
    console.log('value:', value);
    if (episode === 'all') {
      setEpisodeFilter([true, true, true]);
      return;
    }
    let temp = [...episodeFilter];
    temp[episode] = value;
    setEpisodeFilter(temp);
  };

  return (
    <div>
      <div className="table-filter-container">
        <div className="table-filter" id="difficulty">
          <p>Difficulty</p>
          <Button func={() => setDifficulty('ultimate')} label="Ultimate" />
          <Button func={() => setDifficulty('vhard')} label="Very hard" />
          <Button func={() => setDifficulty('hard')} label="Hard" />
          <Button func={() => setDifficulty('normal')} label="Normal" />
        </div>

        <div className="table-filter" id="episode">
          <p>Episode</p>
          <Button
            highlighted={
              episodeFilter[0] && episodeFilter[1] && episodeFilter[2]
            }
            func={() => {
              changeEpFilter('all', true);
            }}
            label="All"
          />
          <Button
            highlighted={episodeFilter[0]}
            func={() => {
              changeEpFilter(0, !episodeFilter[0]);
            }}
            label="Episode 1"
          />
          <Button
            highlighted={episodeFilter[1]}
            func={() => {
              changeEpFilter(1, !episodeFilter[1]);
            }}
            label="Episode 2"
          />
          <Button
            highlighted={episodeFilter[2]}
            func={() => {
              changeEpFilter(2, !episodeFilter[2]);
            }}
            label="Episode 4"
          />
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
