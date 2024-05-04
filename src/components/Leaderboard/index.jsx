import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"

const Leaderboard = () => {
  
  const buildings = [
    {
      name: "1",
      consumption: "4.4",
      unit: "kWh"
    },
    {
      name: "2",
      consumption: "5.4",
      unit: "kWh"
    },
    {
      name: "3",
      consumption: "3.4",
      unit: "kWh"
    }
  ]

  const sortByConsumption = ( a, b ) => {
    return a.consumption - b.consumption
  }

  return (
    <div className="grid-container">
      {buildings.sort(sortByConsumption).map(building => {
        return (<LeaderboardPlace key={building.name} building={building} />)
      }
      )}
    </div>
  )
}

export default Leaderboard