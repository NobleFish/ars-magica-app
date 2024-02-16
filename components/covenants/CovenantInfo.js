// components/covenants/CovenantInfo.js

const CovenantInfo = ({covenant}) => {
  // Function to edit a covenant
  const editCovenant = (id) => {
    window.location.href = `/covenants/edit/${id}`;
  }

  // Function to delete a covenant
  const deleteCovenant = (id) => {
    fetch(`/api/covenants/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = '/covenants';
        } else {
          console.error('Failed to delete covenant');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  // Function to confirm deletion
  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this covenant?')) {
      deleteCovenant(covenant._id);
    }
  };

  return (
    <div key={`${covenant._id}`}>
      <h2>{covenant.covenant_name}</h2>
      <button onClick={() => editCovenant(covenant._id)}>Edit</button>
      <button onClick={() => confirmDelete(covenant._id)}>Delete</button>
    </div>
  );
};

export default CovenantInfo;
