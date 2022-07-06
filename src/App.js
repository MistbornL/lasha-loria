import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PDP from "./pages/PDP/PDP";
import Cart from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PDP/:id" element={<PDP />} />
      <Route path="/:category" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
