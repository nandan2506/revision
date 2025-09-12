import { memo } from "react";

const ProductCard = memo(function ProductCard({product}) {
  return (
    <div
     className="border-2 w-m text-center p-2">
        <img src={product.thumbnail} alt="" />
      <h1>Title: {product.title}</h1>
      <p>Price: {product.price}</p>
    </div>
  );
});

export default ProductCard;
