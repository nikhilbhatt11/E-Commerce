import React from "react";

import { Navigate } from "react-router-dom";
import { withUser } from "./withProvider";

function NotUserRoute({ user, children }) {
  if (user) {
    return <Navigate to="/products/main" />;
  }
  return children;
}
export default withUser(NotUserRoute);
