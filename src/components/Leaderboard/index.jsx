import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"
import { useState } from "react"

const Leaderboard = () => {
  const [continuous, setContinuous] = useState(undefined)

  const fetchData = async () => {
    const response = await fetch(
      "https://hackathon.kvanttori.fi/buildings/d46078e8-8df8-4333-b961-fe8e27ccc130/streams"
    );

    if (!response.body) return;

    for await (const data of readNDJSONStream(response.body)) {
      setContinuous(data)
      console.log(data)

    }
  }

  console.log(continuous)

  fetchData()
  
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
      <h1>Tulostaulu: </h1>
      {buildings.sort(sortByConsumption).map(building => {
        return (<LeaderboardPlace key={building.name} building={building} />)
      }
      )}
      <h2>{continuous && continuous.consumer.consumption.value}</h2>
    </div>
  )
}

export default Leaderboard