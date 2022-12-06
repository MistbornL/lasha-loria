import "./App.scss";
import { Routes, Route, useParams } from "react-router-dom";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
