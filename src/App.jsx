import React from "react";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import User from "./components/TopBar_Components/User";
import Settings from "./components/TopBar_Components/Settings";
import Orders from "./components/SideBar_Components/Orders";
import Sidebar from "./components/Sidebar";
import Overview from "./components/SideBar_Components/Overview";
import Dashboard1 from "./components/SideBar_Components/Dashboard";  
import Product from "./components/SideBar_Components/Product";
import Analytics from "./components/SideBar_Components/Analytics";
import Feedback from "./components/SideBar_Components/Feedback";


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
    element: <Dashboard1 />,
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
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
