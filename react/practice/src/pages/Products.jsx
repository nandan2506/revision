import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../components/ProductCard";

// throttle helper
function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const getProd = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const limit = 12;
      const skip = (pageNum - 1) * limit;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();

      setProducts((prev) => {
        const newProducts = data.products.filter(
          (np) => !prev.some((pp) => pp.id === np.id)
        );
        const updated = [...prev, ...newProducts];

        if (updated.length >= data.total) {
          setHasMore(false);
        }

        return updated;
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) getProd(page);
  }, [page]);

  const handleScroll = useCallback(
    throttle(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        if (!loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      }
    }, 1000),
    [loading, hasMore]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {products.map((p) => (
        <div key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
      {loading && <h2>Loading more products...</h2>}
      {!hasMore && <h2>No more products to load.</h2>}
    </div>
  );
}
