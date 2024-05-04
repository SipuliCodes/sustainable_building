import "./Leaderboard.css"; // Reusing the existing styles

const Recommendations = () => {
  return (
    <div className="grid-container">
      <h1>Energy Saving Recommendations:</h1>
      <p>Here are some tips to improve your energy efficiency:</p>
      <ul>
        <li>Switch to LED lighting.</li>
        <li>Unplug devices when not in use.</li>
        <li>Use energy-efficient appliances.</li>
        <li>Consider solar panels.</li>
      </ul>
    </div>
  );
};

export default Recommendations;
