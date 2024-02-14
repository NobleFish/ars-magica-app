import CharacterForm from '../../components/characters/CharacterForm';

export default function CharactersCreate() {
  return (
    <div>
      <h1>Create Character</h1>
      <CharacterForm character={null}/>
    </div>
  );
}