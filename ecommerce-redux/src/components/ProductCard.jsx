import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>{product.category}</p>

      <Link to={`/product/${product.id}`}>
        <button className="btn">
          View Details
        </button>
      </Link>

      <br />

      <button
        className="btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;