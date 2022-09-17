import React, { useCallback, useEffect, useRef, useState } from 'react';
import BeatTime from './misc/BeatTime';
import Select from './Select';
import Checkbox from './Checkbox';
import { secIDs, classes } from '../data/miscData';

import './styles/Navbar.css';

function Navbar({
  difficulty,
  setDifficulty,
  character,
  setCharacter,
  characterMode,
  setCharacterMode,
  episodeFilter,
  changeEpFilter,
  search,
  setSearch
}) {
  const [open, setOpen] = useState(false);
  const [textToBeSearched, setTextToBeSearched] = useState('');

  return (
    <div className="navbar-container">
      <SubMenu label="Jump to">
        <JumpDestinations changeEpFilter={changeEpFilter} />
      </SubMenu>
      <SubMenu label="Filters">
        <Filters
          episodeFilter={episodeFilter}
          changeEpFilter={changeEpFilter}
          character={character}
          setCharacter={setCharacter}
          characterMode={characterMode}
          setCharacterMode={setCharacterMode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </SubMenu>
      <SearchBar
        setSearch={setSearch}
        textToBeSearched={textToBeSearched}
        setTextToBeSearched={setTextToBeSearched}
      />
      <BeatTime />
    </div>
  );
}

function SearchBar({ setSearch, textToBeSearched, setTextToBeSearched }) {
  return (
    <div className="nav__search-wrapper">
      <input
        type="text"
        placeholder="Search item names"
        value={textToBeSearched}
        onChange={e => setTextToBeSearched(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') setSearch(textToBeSearched);
        }}
      />
      <button onClick={() => setSearch(textToBeSearched)}>Search</button>
    </div>
  );
}

function SubMenu({ label, children }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef();

  const handleClick = useCallback(e => {
    // if we click outside the container OR one of the anchors for navigating
    if (!containerRef.current.contains(e.target) || e.target.tagName === 'A')
      setExpanded(false);
  }, []);

  useEffect(() => {
    if (expanded)
      setTimeout(() => window.addEventListener('click', handleClick), 10);
    else window.removeEventListener('click', handleClick);
  }, [expanded]);

  return (
    <div className="navbar__submenu-container">
      <div
        className="navbar__submenu-toggle"
        onClick={() => setExpanded(e => !e)}
      >
        <span>{label}</span>
      </div>
      {expanded && (
        <div ref={containerRef} className="navbar__submenu-contents">
          {children}
        </div>
      )}
    </div>
  );
}

function Filters({
  difficulty,
  setDifficulty,
  episodeFilter,
  changeEpFilter,
  character,
  setCharacter,
  characterMode,
  setCharacterMode
}) {
  console.log('difficulty from component:', difficulty);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p className="filter-label">Difficulty</p>
        <div className="ep-filter__input-wrapper">
          <input
            type="radio"
            id="ultimate"
            value="ultimate"
            checked={difficulty === 'ultimate'}
            onChange={e => setDifficulty(e.target.value)}
          />
          <label htmlFor="ultimate">Ultimate</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="radio"
            id="vhard"
            value="vhard"
            checked={difficulty === 'vhard'}
            onChange={e => setDifficulty(e.target.value)}
          />
          <label htmlFor="vhard">Very Hard</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="radio"
            id="hard"
            value="hard"
            checked={difficulty === 'hard'}
            onChange={e => setDifficulty(e.target.value)}
          />
          <label htmlFor="hard">Hard</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="radio"
            id="normal"
            value="normal"
            checked={difficulty === 'normal'}
            onChange={e => setDifficulty(e.target.value)}
          />
          <label htmlFor="normal">Normal</label>
        </div>
      </div>
      <hr />
      <div>
        <p className="filter-label">Episode</p>
        <div className="ep-filter__input-wrapper">
          <input
            type="checkbox"
            id="all"
            checked={episodeFilter[0] && episodeFilter[1] && episodeFilter[2]}
            readOnly={episodeFilter[0] && episodeFilter[1] && episodeFilter[2]}
            onChange={() => changeEpFilter('all', true)}
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="checkbox"
            id="ep1"
            checked={episodeFilter[0]}
            onChange={e => changeEpFilter(0, e.target.checked)}
          />
          <label htmlFor="ep1">Episode 1</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="checkbox"
            id="ep2"
            checked={episodeFilter[1]}
            onChange={e => changeEpFilter(1, e.target.checked)}
          />
          <label htmlFor="ep2">Episode 2</label>
        </div>
        <div className="ep-filter__input-wrapper">
          <input
            type="checkbox"
            id="ep4"
            checked={episodeFilter[2]}
            onChange={e => changeEpFilter(2, e.target.checked)}
          />
          <label htmlFor="ep4">Episode 4</label>
        </div>
      </div>
      <hr />
      <Character
        character={character}
        setCharacter={setCharacter}
        characterMode={characterMode}
        setCharacterMode={setCharacterMode}
      />
    </>
  );
}

function JumpDestinations({ changeEpFilter }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p className="episode-name">Episode 1</p>
      <ul onClick={() => changeEpFilter(0, true)}>
        <li>
          <a href="#forest">Forest</a>
        </li>
        <li>
          <a href="#caves">Caves</a>
        </li>
        <li>
          <a href="#mines">Mines</a>
        </li>
        <li>
          <a href="#ruins">Ruins</a>
        </li>
      </ul>
      <p className="episode-name">Episode 2</p>
      <ul onClick={() => changeEpFilter(1, true)}>
        <li>
          <a href="#vr-temple">VR Temple</a>
        </li>
        <li>
          <a href="#vr-spaceship">VR Spaceship</a>
        </li>
        <li>
          <a href="#central-control-area">Central Control Area</a>
        </li>
        <li>
          <a href="#seabed">Seabed</a>
        </li>
        <li>
          <a href="#control-tower">Control Tower</a>
        </li>
      </ul>
      <p className="episode-name">Episode 4</p>
      <ul onClick={() => changeEpFilter(2, true)}>
        <li>
          <a href="#crater">Crater</a>
        </li>
        <li>
          <a href="#subterranean-desert">Subterranean Desert</a>
        </li>
      </ul>
    </div>
  );
}

function Character({
  character,
  setCharacter,
  characterMode,
  setCharacterMode
}) {
  const [secID, setSecID] = useState(character.secID);
  const [characterClass, setCharacterClass] = useState(character.class);

  useEffect(() => {
    setCharacter({ ...character, secID: secID });
  }, [secID]);

  useEffect(() => {
    setCharacter({ ...character, class: characterClass });
  }, [characterClass]);

  return (
    <div>
      <p className="filter-label">Character</p>
      <Checkbox
        label="Use character filter"
        labelSide="right"
        value={characterMode}
        style={{ margin: '0.5rem 0 1rem 0' }}
        setValue={e => {
          setCharacterMode(e.target.checked);
        }}
      />
      <div className={`character-controls ${!characterMode ? 'fade' : ''}`}>
        {/* <p>Current character</p>
        <TextInput
          label="Name"
          defaultValue={character.name}
          setValue={e => setCharacter({ ...character, name: e.target.value })}
        /> */}
        <Select
          label={'SectionID'}
          options={secIDs.map(s => {
            return s.name;
          })}
          value={character.secID}
          setValue={setSecID}
        />
        <Select
          label={'Class'}
          options={classes.map(c => {
            return c.name;
          })}
          value={character.class}
          setValue={setCharacterClass}
          borderFreq={4}
        />
      </div>
    </div>
  );
}

export default Navbar;
