import React from 'react';

const LeaderboardPlace = ({ building }) => {
    return (
        <div className="leaderboard-place">
            <span className="place-name">{building.name}</span>
            <span className="place-consumption">{building.consumption} </span>
            <span className="place-unit">{building.unit}</span>
        </div>
    );
};

export default LeaderboardPlace;