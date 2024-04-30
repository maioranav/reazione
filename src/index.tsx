import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./Components/NotFound/NotFound";
import { Homepage } from "./Components/Homepage/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Homepage /> }, { path: "/play" }, { path: "*", element: <NotFound /> }],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
