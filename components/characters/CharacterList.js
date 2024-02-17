// components/characters/CharacterList.js
import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, deleteCharacter}) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-1">
      {characters.map(character => (
        <CharacterCard character={character} deleteCharacter={deleteCharacter} key={character._id} />
      ))}
      </div>
    </div>
  );
};

export default CharacterList;