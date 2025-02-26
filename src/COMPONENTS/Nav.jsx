import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
  
    <nav className="flex justify-between items-center px-6 py-4 bg-black">
    <NavLink className=" text-4xl font-bold" to="/">
   <span className="bg-clip-text bg-linear-to-r text-transparent from-[#F97316] to-[#22C55E]"> Shop Media</span>
    </NavLink>
    <div className="flex gap-6">
      <NavLink className="text-lg font-medium text-amber-600" to="/products"><span className=" text-amber-600">Products</span></NavLink>
      <NavLink className="text-lg font-medium" to="/SignUp">Sign Up</NavLink>
      <NavLink className="text-lg font-medium" to="/login">Log In</NavLink>
    </div>
    <NavLink className="text-lg font-medium" to="/ShopBag">Shop</NavLink>
  </nav>
  );
};

export default Nav;
