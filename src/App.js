import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PDP from "./pages/PDP/PDP";
import Card from "./pages/Card/Card";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PDP" element={<PDP />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
