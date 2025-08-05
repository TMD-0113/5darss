import React from "react";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">SAVATDAGI MAXSULOTLARINGIZ</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">SAVATCHA BO'SH.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mb-2"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-yellow-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
