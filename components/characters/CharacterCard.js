// components/characters/CharacterCard.js
import Button from "../layout/Button";

const CharacterCard = ({character, deleteCharacter}) => {
  
  const goToCharacter = (id) => {
    window.location.href = `/characters/${id}`;
  };

  // Function to edit a character
  const editCharacter = (id) => {
    window.location.href = `/characters/edit/${id}`;
  };

  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      deleteCharacter(character._id);
    }
  };

  return (
  <div className="bg-gray-400 flex flex-col items-center justify-center rounded-2xl" key={`${character._id}`}>
    <h2>{character.character_name}</h2>
    <p>Type: {character.character_type}</p>
    <div className="mt-4">
      <Button onClick={() => goToCharacter(character._id)}>Info</Button>
      <Button onClick={() => editCharacter(character._id)}>Edit</Button>
      <Button onClick={() => confirmDelete(character._id)}>Delete</Button>
    </div>
  </div>
  );
};

export default CharacterCard;
