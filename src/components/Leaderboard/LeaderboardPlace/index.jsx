const LeaderboardPlace = ({ building }) => {

  return (
    <div key={building.name}>
      <h1>Name: {building.name}</h1>
      <h2>
        Consumption: {building.consumption} {building.unit}
      </h2>
    </div>
  );
}

export default LeaderboardPlace