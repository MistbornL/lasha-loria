import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PDP from "./pages/PDP/PDP";
import Cart from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { Clothes } from "./pages/Home/categories/Clothes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PDP/:id" element={<PDP />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/clothes" element={<Clothes />} />
      {/* <Route path="/tech" element={<Cart />} /> */}
    </Routes>
  );
}

export default App;
