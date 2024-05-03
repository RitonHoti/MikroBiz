//imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import HomePage from "./routes/HomePage";
import Services from "./routes/Services";
import Products from "./routes/Products";
import About from "./routes/About";
import Contact from "./routes/Contact";
import RootLayout from "./routes/RootLayout";
import ProductDetail from "./routes/ProductDetail";
import HappyClients from "./routes/HappyClients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/services", element: <Services /> },
      {
        path: "/products",
        element: <Products />,
        children: [
          { path: "/products/happyClients", element: <HappyClients /> },
        ],
      },
      { path: "/about", element: <About /> },
      { path: "*", element: <HomePage />},
    ],
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  { path: "/contact-us", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
