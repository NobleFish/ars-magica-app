// components/characters/CharacterForm.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CharacterForm = ({ character: initialCharacter}) => {

  const router = useRouter();

  const [charType, setCharacterType] = useState(initialCharacter ? initialCharacter.character_type : 'grog');
  const [character_name, setCharacterName] = useState(initialCharacter ? initialCharacter.character_name : '');
  const [player_name, setPlayerName] = useState(initialCharacter ? initialCharacter.player_name : '');
  const [saga, setSaga] = useState(initialCharacter ? initialCharacter.saga : '');


  useEffect(() => {
    if (initialCharacter) {
      setCharacterType(initialCharacter.character_type);
      setCharacterName(initialCharacter.character_name);
      setPlayerName(initialCharacter.player_name);
      setSaga(initialCharacter.saga);
    }
  }, [initialCharacter]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!charType || !character_name) {
      alert('Please provide a character type and name');
      return;
    }

    const character = {
      character_type: charType,
      character_name: character_name,
      player_name: player_name,
      saga: saga
    };

    const method = initialCharacter ? 'PUT' : 'POST';
    const url = initialCharacter ? `/api/characters/${initialCharacter._id}` : '/api/characters';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    })
      .then(response => response.json())
      .then(() => {
        router.back();
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Character Type:
        <select value={charType} onChange={(e) => setCharacterType(e.target.value)}>
          <option value="grog">Grog</option>
          <option value="companion">Companion</option>
          <option value="mage">Mage</option>
        </select>
      </label>
      <label>
        Character Name:
        <input type="text" value={character_name} onChange={(e) => setCharacterName(e.target.value)} />
      </label>
      <label>
        Player Name:
        <input type="text" value={player_name} onChange={(e) => setPlayerName(e.target.value)} />
      </label>
      <label>
        Saga:
        <input type="text" value={saga} onChange={(e) => setSaga(e.target.value)} />
      </label>
      <button type="submit">{initialCharacter ? 'Update' : 'Create'} Character</button>
    </form>
  );
};

export default CharacterForm;