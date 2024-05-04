import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"
import { useState } from "react"
import { fetchDataStream} from "../../services/getBuildingData"


const Leaderboard = () => {
  const [building1, setBuilding1] = useState(undefined)
  const [building2, setBuilding2] = useState(undefined)
  const [building3, setBuilding3] = useState(undefined);

  fetchDataStream()  
  

  
  const buildings = [
    {
      name: "Asunto 1",
      consumption: "4.4",
      unit: "kWh"
    },
    {
      name: "Asunto 2",
      consumption: "5.4",
      unit: "kWh"
    },
    {
      name: "Asunto 3",
      consumption: "3.4",
      unit: "kWh"
    }
  ]

  const sortByConsumption = ( a, b ) => {
    return a.consumption - b.consumption
  }

  return (
    <div className="grid-container">
      <h1>Leaderboard: </h1>
      {buildings.sort(sortByConsumption).map(building => {
        return (<LeaderboardPlace key={building.name} building={building} />)
      }
      )}
      <h2>{continuous && continuous.consumer.consumption.value}</h2>
    </div>
  )
}

export default Leaderboard