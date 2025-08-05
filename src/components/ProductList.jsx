import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Ma'lumot olinmadi");
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
      setMsg("Savatga qo‘shildi!");
    } else {
      setMsg("Bu mahsulot savatda bor!");
    }
    setTimeout(() => setMsg(""), 2000);
  };

  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item !== id));
  };

  const goToCart = () => {
    const cartItems = products.filter((p) => cart.includes(p.id));
    navigate("/cart", { state: { cartItems } });
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!products.length) {
    return (
      <p className="text-center mt-10 text-gray-700 dark:text-gray-300">
        Kutib turin .....
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-900 text-white rounded-lg shadow-md gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-8 text-lg font-semibold select-none">
          <div
            className="flex items-center gap-2 cursor-pointer"
            title="Sevimlilar"
          >
            <span className="text-pink-400 text-xl">❤️‍🔥</span> {liked.length}
          </div>
          <div
            onClick={goToCart}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-colors"
            title="Savatcha"
          >
            <span className="text-yellow-400 text-xl">🛒</span> {cart.length}
          </div>
        </div>
      </div>

      {msg && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg z-50">
          {msg}
        </div>
      )}

      <div className="bg-gray-900 min-h-screen py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {filteredProducts.map(({ id, images, title, price }) => (
              <div
                key={id}
                className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700
                           rounded-xl shadow-lg p-5 flex flex-col items-center
                           transition-transform transform hover:scale-105 duration-300"
                style={{ height: "420px" }}
              >
                <button
                  onClick={() => toggleLike(id)}
                  className={`self-end text-3xl focus:outline-none transition-colors ${
                    liked.includes(id)
                      ? "text-pink-400"
                      : "text-gray-300 hover:text-pink-400"
                  }`}
                  aria-label="Like product"
                >
                  ❤️‍🔥
                </button>

                <div
                  className="w-full h-56 flex items-center justify-center rounded-lg
                             bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400
                             mt-3 mb-5 overflow-hidden shadow-inner"
                >
                  <img
                    src={images?.[0]}
                    alt={title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold text-center mb-2 line-clamp-2 text-white">
                  {title}
                </h3>

                <p className="text-yellow-400 font-bold text-lg mb-5">
                  ${price}
                </p>

                <div className="mt-auto w-full flex justify-between gap-3">
                  <button
                    onClick={() => addToCart(id)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors rounded-md py-2 font-semibold text-white shadow-md"
                    title="Savatchaga qo‘shish"
                  >
                    Savatga qo‘shish
                  </button>

                  <button
                    onClick={() => deleteFromCart(id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 transition-colors rounded-md py-2 font-semibold text-white shadow-md"
                    title="Savatchadan o‘chirish"
                  >
                    O‘chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
