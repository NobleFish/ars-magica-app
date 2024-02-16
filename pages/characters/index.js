// pages/characters.js

import { useEffect, useState } from 'react';
import CharacterList from '../../components/characters/CharacterList';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // On page load, fetch all characters
  useEffect(() => {
    // Fetch characters from your API
    fetch('/api/characters')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(res => {
      setCharacters(res.data);
      setIsLoading(false); // Set loading state to false after characters are fetched
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error)
      setIsLoading(false); // Set loading state to false if there is an error
    });
  }, []);

  // Function to create a new character
  const createCharacter = () => {
    // Navigate to the create page
    window.location.href = '/characters/create';
  };

  // Function to delete a character
  const deleteCharacter = (id) => {
    fetch(`/api/characters/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Remove the character from the state
          setCharacters(characters.filter(character => character._id !== id));
        } else {
          console.error('Failed to delete character');
        }
      })
      .catch(error => console.error('Error:', error));
      
  };


  return (
    <div>
    <button onClick={createCharacter}>Create Character</button>

    {isLoading && <p>Loading...</p>}
    {!isLoading && !characters && <p>Characters not found</p>}
    {!isLoading && characters && <CharacterList characters={characters} deleteCharacter={deleteCharacter}/>}
    
  </div>
  );
};

export default Characters;