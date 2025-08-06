import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const { basket, dispatch } = useContext(GlobalContext);

  const isInBasket = basket.some((item) => item.id === id);

  const handleAdd = () => {
    if (isInBasket) {
      dispatch({ type: "INCREMENT_PRODUCT", payload: id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: product });
    }
  };

  return (
    <div className="card bg-base-100 text-base-content shadow-lg p-4 rounded-xl border border-base-300 transition-all duration-300">
      <img src={image} alt={title} className="h-40 object-contain mx-auto" />
      <h3 className="font-semibold mt-3 text-center">{title}</h3>
      <p className="text-yellow-500 font-bold text-center">${price}</p>

      <button
        onClick={handleAdd}
        className="btn btn-primary mt-3 w-full transition-all duration-200"
      >
        {isInBasket ? "Soni oshirildi" : "Savatga qo‘shish"}
      </button>
    </div>
  );
}

export default ProductCard;
