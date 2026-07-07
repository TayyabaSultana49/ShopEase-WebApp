import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav className="navbar">
      <h2>🛍️ ShopEase</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;