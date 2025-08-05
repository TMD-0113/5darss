
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-orange-500">
          Loading product details...
        </span>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="mb-4 max-w-xs" />
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      
    </div>
  );
}

export default ProductDetail;
