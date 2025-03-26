import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Mainlaout.css";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Component/Loading";

const MainLayout = () => {
  const {loading,setLoading}=UseAuth()
if(loading){
  return <Loading></Loading>
}

  return (
   
    <Outlet></Outlet>
  );
};

export default MainLayout;
