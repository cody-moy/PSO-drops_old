import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import { secIDs, classes } from '../data/miscData';

import './styles/Character.css';
import Select from './Select';

function Character({ character, setCharacter }) {
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
      <p>Current character</p>
      <TextInput
        label="Name"
        value={character.name}
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
  );
}

export default Character;
