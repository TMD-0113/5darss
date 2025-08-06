import React, { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

const getInitialBasket = () => {
  const saved = localStorage.getItem("basket");
  return saved ? JSON.parse(saved) : [];
};

const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, { ...payload, quantity: 1 }],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter((p) => p.id !== payload),
      };

    case "INCREMENT_PRODUCT":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT_PRODUCT":
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      return { ...state, theme: newTheme };

    case "SIGNUP":
      const newUser = {
        displayName: payload.firstName + " " + payload.lastName,
        email: payload.email,
        password: payload.password,
        photoURL:
          "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      };
      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      return state;

    case "LOGIN":
      return { ...state, user: payload };

    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    basket: getInitialBasket(),
    user: null,
    theme: getInitialTheme(),
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
