import CharacterForm from '../../../components/characters/CharacterForm';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function CharactersEdit() {

    // Inside a component
    const router = useRouter();
    const { id } = router.query;

    // Fetch the character from the API
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (id) {
            fetch(`/api/characters/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setLoading(false);
                return response.json();
            })
            .then(res => setCharacter(res.data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                setLoading(false);
            });
        }
    }, [id]);

    return (
        <div>
            <h1>Edit Character</h1>
            {loading && <p>Loading...</p>}
            {!loading && !character && <p>Character not found</p>}
            {character && <CharacterForm character = {character} />}
        </div>
    );
}