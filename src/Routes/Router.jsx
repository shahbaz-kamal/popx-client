import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingScreen from "../Pages/LandingScreen/LandingScreen";
import SignIn from "../Pages/Signin/Signin";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <LandingScreen></LandingScreen> },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/create-account", element: <CreateAccount></CreateAccount> },
      { path: "/profile", element: <Profile></Profile> },
    ],
  },
]);
