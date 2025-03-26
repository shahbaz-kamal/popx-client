import React from "react";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Component/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default PrivateRoute;
