import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token || token === undefined) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
