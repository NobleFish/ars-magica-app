// components/characters/CharacterCard.js
const CharacterCard = ({character, deleteCharacter}) => {
  
  // Function to edit a character
  const editCharacter = (id) => {
    window.location.href = `/characters/edit/${id}`;
  }

  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      deleteCharacter(character._id);
    }
  };

  return (
    <div key={`${character._id}`}>
      <h2><a href={`/characters/${character._id}`}>{character.character_name}</a></h2>
      <p>Type: {character.character_type}</p>
      <button onClick={() => editCharacter(character._id)}>Edit</button>
      <button onClick={() => confirmDelete(character._id)}>Delete</button>
    </div>
  );
};

export default CharacterCard;
