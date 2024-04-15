import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./components/bag.jsx";
import Home from "./Home.jsx";
import { Provider } from "react-redux";
import MyntraStore from "./store/index.js";
import "./App.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
