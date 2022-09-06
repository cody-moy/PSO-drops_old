import React, { useState } from 'react';
import Character from './Character';
import BeatTime from './misc/BeatTime';

import './styles/Navbar.css';

function Navbar({ character, setCharacter, characterMode, setCharacterMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="character-menu__toggle-wrapper">
        <div
          className="character-menu__toggle"
          onClick={() => setOpen(o => !o)}
        >
          <span>{open ? 'Close' : 'Open'} character menu</span>
        </div>
        {open && (
          <Character
            character={character}
            setCharacter={setCharacter}
            characterMode={characterMode}
            setCharacterMode={setCharacterMode}
          />
        )}
      </div>
      <BeatTime />
    </div>
  );
}

export default Navbar;
