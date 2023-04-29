import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-16 mt-10 text-center">
        <p className="p-3 text-2xl">Page on working </p>
        <Link to="/">
        <button className="bg-[#D8D8D8] rounded-lg p-2">Go To Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
