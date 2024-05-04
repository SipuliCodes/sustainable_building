import { Routes, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Recommendations from "./components/Leaderboard/Recommendations";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Leaderboard />}></Route>
      <Route path="recommendations" element={<Recommendations />}></Route>
    </Routes>
  );
};

export default App;
