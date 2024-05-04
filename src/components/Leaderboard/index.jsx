import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"
import readNDJSONStream from 'ndjson-readablestream'

const Leaderboard = () => {
  let continuous;

  const fetchData = async () => {
    const response = await fetch(
      "https://hackathon.kvanttori.fi/buildings/d46078e8-8df8-4333-b961-fe8e27ccc130/streams"
    );

    if (!response.body) return;

    for await (const data of readNDJSONStream(response.body)) {
      continuous = data
      console.log(data)

    }
  }

  console.log(continuous)

  fetchData()
  
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