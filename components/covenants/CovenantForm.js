// components/covenants/CovenantForm.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../layout/Button';

const CovenantForm = ({ covenant: initialCovenant }) => {
  const router = useRouter();

  const [covenant_name, setCovenantName] = useState(initialCovenant ? initialCovenant.covenant_name : '');

  useEffect(() => {
    if (initialCovenant) {
        setCovenantName(initialCovenant.covenant_name);
    }
  }, [initialCovenant]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!covenant_name) {
      alert('Please provide a name for the covenant');
      return;
    }

    const covenant = {
        covenant_name
    };

    const method = initialCovenant ? 'PUT' : 'POST';
    const url = initialCovenant ? `/api/covenants/${initialCovenant._id}` : '/api/covenants';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(covenant),
    })
      .then((response) => response.json())
      .then(() => {
        router.back();
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Covenant Name:
        <input type="text" value={covenant_name} onChange={(e) => setCovenantName(e.target.value)} />
      </label>
      <Button type="submit">{initialCovenant ? 'Update' : 'Create'} Covenant</Button>
    </form>
  );
};

export default CovenantForm;
