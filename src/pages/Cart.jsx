import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

function Cart() {
  const { basket, dispatch } = useContext(GlobalContext);

  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increment = (id) =>
    dispatch({ type: "INCREMENT_PRODUCT", payload: id });

  const decrement = (id) =>
    dispatch({ type: "DECREMENT_PRODUCT", payload: id });

  const remove = (id) => dispatch({ type: "REMOVE_PRODUCT", payload: id });

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Savat</h2>

      {basket.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="mb-4">Savat bo‘sh.</p>
          <Link to="/" className="btn btn-primary">
            Mahsulotlarga qaytish
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basket.map(({ id, title, image, price, quantity }) => (
              <div
                key={id}
                className="card bg-base-100 shadow-md p-4 rounded relative"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-40 object-contain mx-auto"
                />
                <h3 className="font-semibold mt-3 line-clamp-1">{title}</h3>
                <p className="text-yellow-600 font-bold">${price}</p>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(id)}
                      className="btn btn-sm btn-outline"
                    >
                      −
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                      onClick={() => increment(id)}
                      className="btn btn-sm btn-outline"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => remove(id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right text-2xl font-semibold">
            Umumiy narx:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
