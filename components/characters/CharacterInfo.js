// components/characters/CharacterInfo.js
const CharacterInfo = ({character}) => {
  
    // Function to edit a character
    const editCharacter = (id) => {
      window.location.href = `/characters/edit/${id}`;
    }
    // Function to delete a character
    const deleteCharacter = (id) => {
      fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            window.location.href = '/characters';
          } else {
            console.error('Failed to delete character');
          }
        })
        .catch(error => console.error('Error:', error));
        
    };

    // Function to confirm deletion
    const confirmDelete = () => {
      if (window.confirm('Are you sure you want to delete this character?')) {
        deleteCharacter(character._id);
      }
    };
  
    return (
      <div key={`${character._id}`}>
        <h2>{character.character_name}</h2>
        <p>Type: {character.character_type}</p>
        <p>Player: {character.player_name}</p>
        <p>Saga: {character.saga}</p>
        <button onClick={() => editCharacter(character._id)}>Edit</button>
        <button onClick={() => confirmDelete(character._id)}>Delete</button>
      </div>
    );
  };
  
  export default CharacterInfo;
  