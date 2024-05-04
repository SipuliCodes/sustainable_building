import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"

const Leaderboard = () => {
  
  const buildings = [
    { name: "Rakennus 1", consumption: "4.4", unit: "kWh" },
    { name: "Rakennus 2", consumption: "5.4", unit: "kWh" },
    { name: "Rakennus 3", consumption: "3.4", unit: "kWh" },
  ];

  const sortByConsumption = (a, b) => a.consumption - b.consumption;

  return (
    <div className="grid-container">
      <h1>Leaderboard: </h1>
      {buildings.sort(sortByConsumption).map(building => {
        return (<LeaderboardPlace key={building.name} building={building} />)
      }
      )}
    </div>
  );
};

export default Leaderboard;
