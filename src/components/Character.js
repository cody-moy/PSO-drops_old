import React from 'react';
import TextInput from './TextInput';
import { secIDs } from '../data/miscData';

import './styles/Character.css';
import Select from './Select';

function Character({ character, setCharacter }) {
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
        setValue={setCharacter}
      />
    </div>
  );
}

export default Character;
