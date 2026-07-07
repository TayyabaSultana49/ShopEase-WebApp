import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productSlice";

import ProductCard from "../components/ProductCard";

import SearchBar from "../components/SearchBar";

import CategoryFilter from "../components/CategoryFilter";

import Loader from "../components/Loader";

function Products() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) return <Loader />;

  if (error)
    return (
      <h2 style={{ textAlign: "center" }}>
        {error}
      </h2>
    );

  return (
    <div className="container">
      <h1>Products</h1>

      <br />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <br />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <br />
      <br />

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;