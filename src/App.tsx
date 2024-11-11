import { Routes, Route } from "react-router-dom";

import "./App.css";
import ModernChessLanding from "./components/landing-page";
import Referee from "./components/Referee/Referee";
import { useConnection } from "arweave-wallet-kit";

function App() {
  const { connected } = useConnection();
  return (
    <Routes>
      <Route path="/" element={<ModernChessLanding />} />
      {connected && <Route path="/playgame" element={<Referee />} />}
    </Routes>
  );
}

export default App;
