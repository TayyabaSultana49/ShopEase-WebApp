import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <Loader />;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "contain",
          }}
        />

        <div style={{ flex: 1 }}>
          <h2>{product.title}</h2>

          <br />

          <h3>${product.price}</h3>

          <br />

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <br />

          <p>{product.description}</p>

          <br />

          <button
            className="btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;