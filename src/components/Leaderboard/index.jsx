import LeaderboardPlace from "./LeaderboardPlace"
import "./Leaderboard.css"
import { useState, useEffect } from "react"
import { fetchDataStream } from "../../services/getBuildingData"
import {building1 as b1, building2 as b2, building3 as b3} from "../../../data.json"



const Leaderboard = () => {
  const [building1, setBuilding1] = useState(undefined)
  const [building2, setBuilding2] = useState(undefined)
  const [building3, setBuilding3] = useState(undefined);

  useEffect(() => {
    const cleanupFunctions = [];

    const fetchBuildingData = async (id, setFn) => {
      const fetchData = fetchDataStream({ id, setFn });
      cleanupFunctions.push(fetchData); // Push cleanup function to the array
    };

    fetchBuildingData("d46078e8-8df8-4333-b961-fe8e27ccc130", setBuilding1);
    fetchBuildingData("a0c41517-ff07-493a-83af-27131e750cb2", setBuilding2);
    fetchBuildingData("f5d23403-9946-452d-97fa-acaf1c3834ab", setBuilding3);

    // Cleanup function to cancel all data streams
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  if (!building1 || !building2 || !building3) {
    return
  }
  
  console.log(building1)

  const buildings = [
    {
      name: "1",
      consumption: Math.round(building1.consumer.consumption.value * 100) / 100,
      unit: building1.consumer.consumption.unit,
      points: b1.points
    },
    {
      name: "2",
      consumption: Math.round(building2.consumer.consumption.value * 100) / 100,
      unit: building2.consumer.consumption.unit,
      points: b2.points
    },
    {
      name: "3",
      consumption: Math.round(building3.consumer.consumption.value * 100) / 100,
      unit: building3.consumer.consumption.unit,
      points: b3.points
    },
  ];

  if (
    building1.consumer.consumption.value < building2.consumer.consumption.value &&
    building1.consumer.consumption.value < building3.consumer.consumption.value
  ) {
    b1.points += 1;
  } else if (
    building2.consumer.consumption.value < building1.consumer.consumption.value &&
    building2.consumer.consumption.value < building3.consumer.consumption.value
  ) {
    b2.points += 1;
  } else if (
    building3.consumer.consumption.value < building1.consumer.consumption.value &&
    building3.consumer.consumption.value < building2.consumer.consumption.value
  ) {
    b3.points += 1;
  }

  const sortByConsumption = ( a, b ) => {
    return a.consumption - b.consumption
  }

  return (
    <div className="grid-container">
      <h1 className="tulostaulu">Tulostaulu: </h1>
      {buildings.sort(sortByConsumption).map((building, index) => {
        const placement = index + 1
        return (<LeaderboardPlace key={building.name} building={building} placement={placement} points={building.points} />)
      }
      )}
    </div>
  )
}

export default Leaderboard