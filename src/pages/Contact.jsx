import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Biz bilan bog'lanish
        </h2>
        <p className="mb-2 text-center">
          Email:{" "}
          <a href="internet@gmail.com" className="text-blue-600 underline">
          internet@gmail.com
          </a>
        </p>
        <p className="text-center">
          Telefon:{" "}
          <a href="tel:+998940791505" className="text-blue-600 underline">
            +998 94 079 15 05
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
