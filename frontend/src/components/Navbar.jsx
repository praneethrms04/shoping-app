import { logo } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="sm:px-16 px-6 py-4 w-full z-20 bg-slate-700 text-white top-0">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-[18px] font-bold">Go-Shop</p>
        </Link>
        <ul className="sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className="">
              <Link to={nav.id} className="hover:text-[#F97B22] text-[18px]">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
