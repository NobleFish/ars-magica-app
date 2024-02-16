import CovenantCard from './CovenantCard';
// components/covenants/CovenantList.js
const CovenantList = ({ covenants, deleteCovenant }) => {
  return (
    <div>
      <h1>Covenants</h1>
      {covenants.map(covenant => (
        <CovenantCard covenant={covenant} deleteCovenant={deleteCovenant} key={covenant._id} />
      ))}
    </div>
  );
};

export default CovenantList;
