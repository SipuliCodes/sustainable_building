import React from "react";

const LeaderboardPlace = ({ building, placement }) => {
  return (
    <div
      className={
        placement == 1 ? "first leaderboard-place" : "leaderboard-place"
      }
    >
      <div className="flexBox" onClick={() => (window.location.href = `/building/${building.name}`)}>
        <span>{placement}. sija</span>
        <span className="place-name">Rakennus {building.name}</span>
        <span className="place-consumption">
          {building.consumption} {building.unit}
        </span>
        <span>{building.points} pistettä</span>
      </div>
      {placement != 1 && (
        <button
          className="recommendations-button"
          onClick={() => (window.location.href = "/suositukset")}
        >
          Suositukset - vähennä kulutusta!
        </button>
      )}
      {placement === 1 && (
        <div className="filler"> Vau! Teidän rakennuksenne kuluttaa vähiten </div>
      )}
    </div>
  );
};

export default LeaderboardPlace;
