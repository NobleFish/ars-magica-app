import { useEffect, useState } from 'react';
import CovenantList from '../../components/covenants/CovenantList';

const Covenants = () => {
  const [covenants, setCovenants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // On page load, fetch all covenants
  useEffect(() => {
    // Fetch covenants from your API
    fetch('/api/covenants')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(res => {
        setCovenants(res.data);
        setIsLoading(false); // Set loading state to false after covenants are fetched
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setIsLoading(false); // Set loading state to false if there is an error
      });
  }, []);

  // Function to create a new covenant
  const createCovenant = () => {
    // Navigate to the create page
    window.location.href = '/covenants/create';
  };

  // Function to delete a covenant
  const deleteCovenant = (id) => {
    fetch(`/api/covenants/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Remove the covenant from the state
          setCovenants(covenants.filter(covenant => covenant._id !== id));
        } else {
          console.error('Failed to delete covenant');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={createCovenant}>Create Covenant</button>

      {isLoading && <p>Loading...</p>}
      {!isLoading && !covenants && <p>Covenants not found</p>}
      {!isLoading && covenants && <CovenantList covenants={covenants} deleteCovenant={deleteCovenant} />}
    </div>
  );
};

export default Covenants;
