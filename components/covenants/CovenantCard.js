// component/covenants/CovenantCard.js
const CovenantCard = ({ covenant, deleteCovenant }) => {

  // Function to edit a covenant
  const editCovenant = (id) => {
    window.location.href = `/covenants/edit/${id}`;
  }

  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete this covenant?')) {
      deleteCovenant(covenant._id);
    }
  };

  return (
    <div key={`${covenant._id}`}>
      <h2><a href={`/covenants/${covenant._id}`}>{covenant.covenant_name}</a></h2>
      <button onClick={() => editCovenant(covenant._id)}>Edit</button>
      <button onClick={() => confirmDelete(covenant._id)}>Delete</button>
    </div>
  );
};

export default CovenantCard;
