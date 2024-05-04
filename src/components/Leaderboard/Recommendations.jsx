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
      <p>Tässä muutamia vinkkejä energiatehokkuutesi parantamiseen:</p>
      <ul>
        <li>Vaihda LED-valaistukseen.</li>
        <li>Irtikytkentä laitteet, kun niitä ei käytetä.</li>
        <li>Käytä energiatehokkaita laitteita.</li>
        <li>Harkitse aurinkopaneeleita.</li>
      </ul>
    </div>
  );
};

export default Recommendations;
