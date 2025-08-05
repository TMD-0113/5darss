import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Savat</h2>
      {cartItems.length === 0 ? (
        <p>Savat bo‘sh.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map(({ id, title, image, price }) => (
            <div key={id} className="bg-white shadow rounded p-4">
              <img
                src={image}
                alt={title}
                className="h-40 object-contain mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">{title}</h3>
              <p className="text-yellow-600 font-bold">${price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
