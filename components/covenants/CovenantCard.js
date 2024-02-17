// component/covenants/CovenantCard.js
import Button from "../layout/Button";
const CovenantCard = ({ covenant, deleteCovenant }) => {

  const goToCovenant = (id) => { 
    window.location.href = `/covenants/${id}`;
  }

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
    <div className="bg-gray-400 flex flex-col items-center justify-center rounded-2xl" key={`${covenant._id}`}>
      <h2>{covenant.covenant_name}</h2>
      <div>
        <Button onClick={() => goToCovenant(covenant._id)}>Info</Button>
        <Button onClick={() => editCovenant(covenant._id)}>Edit</Button>
        <Button onClick={() => confirmDelete(covenant._id)}>Delete</Button>
      </div>
    </div>
  );
};

export default CovenantCard;