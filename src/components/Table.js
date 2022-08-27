import React, { useState, useEffect } from 'react';
import { secIDs } from '../data/miscData';
import monsterDrops from '../data/MONSTER_DROPS';
import boxDrops from '../data/BOX_DROPS';
import Character from './Character';
import Button from './Button';
import getSecIDIcon from '../Utils/getSecIDIcon';

import Greenill from '../assets/Greenill_icon.png';
import Viridia from '../assets/Viridia_icon.png';
import Bluefull from '../assets/Bluefull_icon.png';
import Oran from '../assets/Oran_icon.png';
import Purplenum from '../assets/Purplenum_icon.png';
import Skyly from '../assets/Skyly_icon.png';
import Pinkal from '../assets/Pinkal_icon.png';
import Whitill from '../assets/Whitill_icon.png';
import Yellowboze from '../assets/Yellowboze_icon.png';
import Redria from '../assets/Redria_icon.png';

import './styles/Table.css';

function Table({ setItem }) {
  const [difficulty, setDifficulty] = useState('ultimate');
  const [episodeFilter, setEpisodeFilter] = useState([true, true, true]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodes(monsterDrops[difficulty].episodes);
  }, [difficulty]);

  const changeEpFilter = (episode, value) => {
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
          <Button
            func={() => setDifficulty('ultimate')}
            label="Ultimate"
            highlighted={difficulty === 'ultimate'}
          />
          <Button
            func={() => setDifficulty('vhard')}
            label="Very hard"
            highlighted={difficulty === 'vhard'}
          />
          <Button
            func={() => setDifficulty('hard')}
            label="Hard"
            highlighted={difficulty === 'hard'}
          />
          <Button
            func={() => setDifficulty('normal')}
            label="Normal"
            highlighted={difficulty === 'normal'}
          />
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
          {episodes.map((episode, ei) => {
            return (
              <div
                key={ei}
                className="table__episode-container"
                id={episode.name}
              >
                <>
                  <div className="table__episode-name-wrapper">
                    <h3 className="table__episode-name">
                      {episode.name.toUpperCase()}
                    </h3>
                  </div>
                  {episode.areas.map((area, ai) => {
                    return (
                      <div
                        key={ai}
                        className="table__area-container"
                        id={area.name}
                      >
                        <>
                          <div className="secID-container">
                            <h4 className="table__area-name">{area.name}</h4>
                            <div style={{ display: 'flex', width: '100%' }}>
                              <div className="table__source-label-container">
                                {/* <p>Source</p> */}
                              </div>
                              <div
                                className="table__secID-container"
                                id="Viridia"
                              >
                                <img src={Viridia} alt="Viridia-icon" />
                                <p>Viridia</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Greenill"
                              >
                                <img src={Greenill} alt="Greenill-icon" />
                                <p>Greenill</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Skyly"
                              >
                                <img src={Skyly} alt="Skyly-icon" />
                                <p>Skyly</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Bluefull"
                              >
                                <img src={Bluefull} alt="Bluefull-icon" />
                                <p>Bluefull</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Purplenum"
                              >
                                <img src={Purplenum} alt="Purplenum-icon" />
                                <p>Purplenum</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Pinkal"
                              >
                                <img src={Pinkal} alt="Pinkal-icon" />
                                <p>Pinkal</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Redria"
                              >
                                <img src={Redria} alt="Redria-icon" />
                                <p>Redria</p>
                              </div>
                              <div className="table__secID-container" id="Oran">
                                <img src={Oran} alt="Oran-icon" />
                                <p>Oran</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Yellowboze"
                              >
                                <img src={Yellowboze} alt="Yellowboze-icon" />
                                <p>Yellowboze</p>
                              </div>
                              <div
                                className="table__secID-container"
                                id="Whitill"
                              >
                                <img src={Whitill} alt="Whitill-icon" />
                                <p>Whitill</p>
                              </div>
                            </div>
                          </div>
                          {area.drops.map((dropSource, di) => {
                            return (
                              <div
                                key={di}
                                className="table__drop-source-container"
                                id={dropSource.source}
                              >
                                <div className="table__row">
                                  <div className="table__drop-source-name-container">
                                    <p
                                      id={
                                        dropSource.rare ? 'rare-monster' : null
                                      }
                                      title={
                                        dropSource.rare
                                          ? `Spawn rate: 1/${dropSource.rareRate}`
                                          : null
                                      }
                                    >
                                      {dropSource.source}
                                    </p>
                                  </div>
                                  {dropSource.items.map((item, ii) => {
                                    return (
                                      <div
                                        key={ii}
                                        className={`table__item-container ${
                                          item.itemName ? '' : 'no-drop'
                                        }`}
                                        onClick={() => setItem(item)}
                                      >
                                        <p
                                          className={`table__item-name ${
                                            item.itemName ? '' : 'no-drop'
                                          }`}
                                        >
                                          {item.itemName || 'N/A'}
                                        </p>
                                        {item.itemName && (
                                          <div className="table__drop-rate_wrapper">
                                            <p className="table__drop-rate">
                                              Drop rate:{' '}
                                            </p>
                                            <p className="table__drop-rate_rate">
                                              1/{item.dropRate}
                                            </p>
                                          </div>
                                        )}
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
