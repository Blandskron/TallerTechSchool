import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import PokemonDetail from "./routes/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,	
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokemonDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);