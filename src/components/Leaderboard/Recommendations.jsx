import "./Leaderboard.css"; // Reusing the existing styles

const Recommendations = () => {
  return (
    <div className="grid-container">
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
      >
        Etusivulle
      </button>
      <h1>Energiansäästösuositukset sinulle:</h1>
      <div className="whiteText">
        <p>Tässä muutamia vinkkejä energiatehokkuutesi parantamiseen:</p>
        <ul>
          <li>Vaihda LED-valaistukseen.</li>
          <li>Kytke laitteet irti, kun niitä ei käytetä.</li>
          <li>Käytä energiatehokkaita laitteita.</li>
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
