import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Explore" element={<PDP />} />
      <Route path="/Activity" element={<Card />} /> */}
    </Routes>
  );
}

export default App;
