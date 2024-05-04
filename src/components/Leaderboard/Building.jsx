import "./Building.css"
import { fetchDataStream } from "../../services/getBuildingData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Building = () => {
  const { name } = useParams()
  const [building, setBuilding] = useState(undefined)

  console.log(name)

  useEffect(() => {
    let cleanupFunction; // Declare a variable to store the cleanup function

    // Call fetchDataStream and store the cleanup function
    if (name === "1") {
      cleanupFunction = fetchDataStream({
        id: "d46078e8-8df8-4333-b961-fe8e27ccc130",
        setFn: setBuilding,
      });
    } else if (name === "2") {
      cleanupFunction = fetchDataStream({
        id: "a0c41517-ff07-493a-83af-27131e750cb2",
        setFn: setBuilding,
      });
    } else if (name === "3") {
      cleanupFunction = fetchDataStream({
        id: "f5d23403-9946-452d-97fa-acaf1c3834ab",
        setFn: setBuilding,
      });
    }

    // Return the cleanup function to be executed when the component unmounts
    return () => {
      if (cleanupFunction) {
        cleanupFunction(); // Call the cleanup function to close the data stream
      }
    };
  }, [name]);

  if (!building) {
    return;
  }
  
  console.log(building)

  return (
    <div className="background">
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
      >
        Etusivulle
      </button>
      <div className="buildingOuterContainer">
        <h1>Building energy metrics</h1>
        <div className="buildingInnerContainer">
          <div>
            <h2>Storage</h2>
            <ul>
              <li>
                Charge {Math.round(building.storage.charge.value * 100) / 100}
                {building.storage.charge.unit}
              </li>
              <li>
                Going to consumption {Math.round(building.storage.to_consumption.value * 100) / 100}
                {building.storage.to_consumption.unit}
              </li>
              <li>
                Going to grid {Math.round(building.storage.to_grid.value * 100 ) / 100}
                {building.storage.to_grid.unit}
              </li>
            </ul>
          </div>
          <div>
            <h2>Consumption</h2>
            <ul>
              <li>
                {Math.round(building.consumer.consumption.value * 100 ) / 100}
                {building.consumer.consumption.unit}
              </li>
            </ul>
          </div>
          <div>
            <h2>Grid</h2>
            <ul>
              <li>
                Going to consumption {Math.round(building.grid.to_consumption.value * 100) / 100}
                {building.grid.to_consumption.unit}
              </li>
              <li>
                Going to storage {Math.round(building.grid.to_storage.value * 100) / 100}
                {building.grid.to_storage.unit}
              </li>
            </ul>
          </div>
          <div>
            <h2>Producer</h2>
            <ul>
              <li>
                Going to storage {Math.round(building.producer.to_storage.value* 100 ) / 100}
                {building.producer.to_storage.unit}
              </li>
              <li>
                Going to consumption { Math.round(building.producer.to_consumption.value * 100) / 100}
                {building.producer.to_consumption.unit}
              </li>
              <li>
                Going to grid { Math.round(building.producer.to_grid.value * 100 ) / 100}
                {building.producer.to_grid.unit}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building