import { Routes, Route } from "react-router-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Brands from "./pages/Brands";
import Shoes from "./pages/Shoes";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
