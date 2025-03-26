import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingScreen from "../Pages/LandingScreen/LandingScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{ path: "/", element: <LandingScreen></LandingScreen> }],
  },
]);
