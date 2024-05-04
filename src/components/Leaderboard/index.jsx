import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"
import { useState } from "react"
import { fetchDataStream } from "../../services/getBuildingData"



const Leaderboard = () => {
  const [building1, setBuilding1] = useState(undefined)
  const [building2, setBuilding2] = useState(undefined)
  const [building3, setBuilding3] = useState(undefined);

  fetchDataStream({ id: "d46078e8-8df8-4333-b961-fe8e27ccc130", setFn: setBuilding1 } );
  fetchDataStream({ id: "a0c41517-ff07-493a-83af-27131e750cb2", setFn: setBuilding2 });
  fetchDataStream({ id: "f5d23403-9946-452d-97fa-acaf1c3834ab", setFn: setBuilding3 });

  console.log(building1)

  if (!building1 || !building2 || !building3) {
    return
  }
  
  const buildings = [
    {
      name: "Rakennus 1",
      consumption: building1.consumer.consumption.value,
      unit: building1.consumer.consumption.unit,
    },
    {
      name: "Rakennus 2",
      consumption: building2.consumer.consumption.value,
      unit: building2.consumer.consumption.unit,
    },
    {
      name: "Rakennus 3",
      consumption: building3.consumer.consumption.value,
      unit: building3.consumer.consumption.unit,
    },
  ];

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
    </div>
  )
}

export default Leaderboard