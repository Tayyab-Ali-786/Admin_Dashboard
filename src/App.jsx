import React from "react";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./pages/Home";
import Dashboard from "./components/TopBar_Components/Dashboard";
import TopBar from "./components/TopBar";
import User from "./components/TopBar_Components/User";
import Settings from "./components/TopBar_Components/Settings";
import Orders from "./components/SideBar_Components/Orders";
import Sidebar from "./components/Sidebar";
import Overview from "./components/SideBar_Components/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/orders",
    element: (
      <div>
        <Orders />
        <Sidebar />
      </div>
    ),
  },
  {
    path: "/overview",
    element: (
      <div>
        <Overview />
        <Sidebar />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
