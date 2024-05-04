import React from "react";

const LeaderboardPlace = ({ building, placement }) => {
  return (
    <div className={placement == 1 ? "first leaderboard-place" : "leaderboard-place" }>
      <span>{placement}. sija</span>
      <span className="place-name">{building.name}</span>
      <span className="place-consumption">{building.consumption} </span>
      <span className="place-unit">{building.unit}</span>
      {placement != 1 && <button
        className="recommendations-button"
        onClick={() => (window.location.href = "/suositukset")}
      >
        Suositukset - vähennä kulutusta!
      </button>
      }
    </div>
  );
};

export default LeaderboardPlace;
