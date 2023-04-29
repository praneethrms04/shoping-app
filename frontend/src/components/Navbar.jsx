import { logo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 py-4 w-full z-20 bg-slate-700 text-white top-0 fixed">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-[18px] font-bold">Go-Shop</p>
        </Link>
        <ul className="sm:flex flex-row gap-10">
          <li className="">
            <Link
              to="/products"
              className="hover:text-[#F97B22] text-[18px] m-3"
            >
              products
            </Link>
            <Link to="/cart" className="hover:text-[#F97B22] text-[18px] m-3">
              Cart
            </Link>
            <Link to="/login" className="hover:text-[#F97B22] text-[18px] m-3">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
