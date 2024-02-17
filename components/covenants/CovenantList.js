import CovenantCard from './CovenantCard';
// components/covenants/CovenantList.js
const CovenantList = ({ covenants, deleteCovenant }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-1">
      {covenants.map(covenant => (
        <CovenantCard covenant={covenant} deleteCovenant={deleteCovenant} key={covenant._id} />
      ))}
      </div>
    </div>
  );
};

export default CovenantList;
