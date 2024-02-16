// pages/covenants/[id].js
import CovenantInfo from '../../components/covenants/CovenantInfo';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function CovenantByID() {
    const router = useRouter();
    const { id } = router.query;

    const [covenant, setCovenant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/covenants/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    setLoading(false);
                    return response.json();
                })
                .then(res => {
                    setCovenant(res.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    return (
        <div>
            <h1>Covenant Info</h1>
            {loading && <p>Loading...</p>}
            {!loading && !covenant && <p>Covenant not found</p>}
            {covenant && <CovenantInfo covenant={covenant} />}
        </div>
    );
}
