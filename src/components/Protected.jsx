import React from "react";
import { Navigate } from "react-router-dom";

export function Protected({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
