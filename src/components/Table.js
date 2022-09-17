import React, { useState, useEffect } from 'react';
import monsterDrops from '../data/MONSTER_DROPS';
import boxDrops from '../data/BOX_DROPS';

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

function Table({
  setItem,
  showDropRatePercent,
  episodeFilter,
  difficulty,
  search
}) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodes(monsterDrops[difficulty].episodes);
  }, [difficulty]);

  const shortenEp = index => {
    if (index === 0) return 'EP1';
    else if (index === 1) return 'EP2';
    else if (index === 2) return 'EP4';
  };

  function getItemNamesFromSource(source) {
    let items = source.items.map(item => item.itemName?.toLowerCase());
    return items;
  }

  return (
    <div>
      {episodes.length > 0 && (
        <div className="episode-wrapper">
          {episodes.map((episode, ei) => {
            if (episodeFilter[ei])
              return (
                <div
                  key={ei}
                  className="table__episode-container"
                  id={episode.name}
                >
                  <>
                    {/* <div className="table__episode-name-wrapper">
                      <h3 className="table__episode-name">
                        {episode.name.toUpperCase()}
                      </h3>
                    </div> */}
                    {episode.areas.map((area, ai) => {
                      return (
                        <>
                          <a
                            className="jump-location"
                            id={area.name.toLowerCase().replaceAll(' ', '-')}
                          />
                          <div
                            key={ai}
                            className={`table__area-container ${
                              search.length > 0 ? 'filtering-for-search' : ''
                            }`}
                            id={area.name}
                          >
                            <div
                              className="secID-container"
                              style={{ opacity: search.length > 0 ? 0.25 : '' }}
                            >
                              <div
                                className="table__area-name"
                                id={area.name
                                  .toLowerCase()
                                  .replaceAll(' ', '-')}
                              >
                                <span>
                                  {shortenEp(ei)}: {area.name}
                                </span>
                              </div>
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
                                <div
                                  className="table__secID-container"
                                  id="Oran"
                                >
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
                              // save a tiny amount of memory / performance hit with this short-circuit
                              let itemNames =
                                search.length > 0
                                  ? getItemNamesFromSource(dropSource)
                                  : null;
                              let includesSearchTerm = Boolean(
                                itemNames?.find(item => item?.includes(search))
                              );
                              return (
                                <div
                                  key={di}
                                  className="table__drop-source-container"
                                  id={dropSource.source}
                                  style={{
                                    display:
                                      search.length > 0 && !includesSearchTerm
                                        ? 'none'
                                        : ''
                                  }}
                                >
                                  <div className="table__row">
                                    <div className="table__drop-source-name-container">
                                      <p
                                        id={
                                          dropSource.rare
                                            ? 'rare-monster'
                                            : null
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
                                            search.length > 0 &&
                                            !item?.itemName
                                              ?.toLowerCase()
                                              .includes(search)
                                              ? 'not-in-search'
                                              : ''
                                          } ${item.itemName ? '' : 'no-drop'}`}
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
                                              {showDropRatePercent ? (
                                                <>
                                                  <p className="table__drop-rate_rate">
                                                    {item.dropRatePercent}%
                                                  </p>
                                                  {dropSource.rare && (
                                                    <>
                                                      <p
                                                        className="true-rate-label"
                                                        title="Adjusted rate factoring the rare monster spawn rate"
                                                      >
                                                        True rate:
                                                      </p>
                                                      <p className="table__drop-rate_rate">
                                                        {parseFloat(
                                                          item.dropRatePercent /
                                                            (dropSource.source ===
                                                            'Kondrieu'
                                                              ? 10
                                                              : 512)
                                                        ).toFixed(5)}
                                                        %
                                                      </p>
                                                    </>
                                                  )}
                                                </>
                                              ) : (
                                                <>
                                                  <p className="table__drop-rate_rate">
                                                    1/
                                                    {item.dropRate.toLocaleString()}
                                                  </p>
                                                  {dropSource.rare && (
                                                    <>
                                                      <p
                                                        className="true-rate-label"
                                                        title="Adjusted rate factoring the rare monster spawn rate"
                                                      >
                                                        True rate:
                                                      </p>
                                                      <p className="table__drop-rate_rate">
                                                        1/
                                                        {(
                                                          item.dropRate *
                                                          (dropSource.source ===
                                                          'Kondrieu'
                                                            ? 10
                                                            : 512)
                                                        ).toLocaleString()}
                                                      </p>
                                                    </>
                                                  )}
                                                </>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
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
