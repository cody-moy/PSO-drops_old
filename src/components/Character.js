import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import { secIDs, classes } from '../data/miscData';
import Select from './Select';
import Checkbox from './Checkbox';

import './styles/Character.css';

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
    <div className="character-info-wrapper">
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
        <p>Current character</p>
        <TextInput
          label="Name"
          defaultValue={character.name}
          setValue={e => setCharacter({ ...character, name: e.target.value })}
        />
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

export default Character;
