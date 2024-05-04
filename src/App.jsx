import { Routes, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Recommendations from "./components/Leaderboard/Recommendations";
import Building from "./components/Leaderboard/Building";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Leaderboard />}></Route>
      <Route path="/suositukset" element={<Recommendations />}></Route>
      <Route path="/building/:name" element={<Building />}> </Route>
    </Routes>
  );
};

export default App;
