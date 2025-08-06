import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import { Protected } from "./components/Protected";

import { GlobalContextProvider, GlobalContext } from "./context/globalContext";
import useFetch from "./hooks/useFetch";

function AppRoutes() {
  const { user } = useContext(GlobalContext);

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Protected user={user}>
            <MainLayout />
          </Protected>
        ),
        children: [
          { index: true, element: <Home /> },
          { path: "contact", element: <Contact /> },
          { path: "product/:id", element: <ProductDetail /> },
          { path: "cart", element: <Cart /> },
        ],
      },
      {
        path: "/login",
        element: user ? <Navigate to="/" /> : <Login />,
      },
      {
        path: "/sign",
        element: user ? <Navigate to="/" /> : <SignUp />,
      },
    ],
    {
      future: {
        v7_startTransition: true,
      },
    }
  );

  const { data: products, loading } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-orange-500">
          Loading...
        </span>
      </div>
    );
  }

  return <RouterProvider router={routes} />;
}

function App() {
  return (
    <GlobalContextProvider>
      <AppRoutes />
    </GlobalContextProvider>
  );
}

export default App;
