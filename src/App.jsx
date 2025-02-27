import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./COMPONENTS/Nav";
import ShopBag from "./COMPONENTS/ShopBag";
import Products from "./COMPONENTS/products/Products";
import SignUp from "./COMPONENTS/SignUp";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/> } />
        <Route path="/products" element={<Products />} />
        <Route path="/shopbag" element={<ShopBag />} />
      </Routes>
    </BrowserRouter>
  );
}
