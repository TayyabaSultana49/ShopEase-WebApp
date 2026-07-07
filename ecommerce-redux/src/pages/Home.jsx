import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to ShopEase</h1>

      <p style={{ margin: "20px 0" }}>
        Discover the best products at the best prices.
      </p>

      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200"
        alt="Shopping"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <br />
      <br />

      <Link to="/products">
        <button className="btn">
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;