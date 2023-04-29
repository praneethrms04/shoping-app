import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Products from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import Authentication from "../pages/Authentication";
import UnAuthorized from "../pages/UnAuthorized"
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/*" element={<UnAuthorized />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
