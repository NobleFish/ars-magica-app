import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, deleteCharacter}) => {
  return (
    <div>
      <h1>Characters</h1>
      {characters.map(character => (
        <CharacterCard character={character} deleteCharacter={deleteCharacter} key={character._id} />
      ))}
    </div>
  );
};

export default CharacterList;