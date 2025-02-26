import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
  
    <nav className="flex justify-between items-center px-6 py-4">
    <NavLink className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent text-4xl font-bold" to="/">
      Shop Media
    </NavLink>
    <div className="flex gap-6">
      <NavLink className="text-lg font-medium" to="/products">Products</NavLink>
      <NavLink className="text-lg font-medium" to="/SignUp">Sign Up</NavLink>
      <NavLink className="text-lg font-medium" to="/login">Log In</NavLink>
    </div>
    <NavLink className="text-lg font-medium" to="/ShopBag">Shop</NavLink>
  </nav>
  );
};

export default Nav;
