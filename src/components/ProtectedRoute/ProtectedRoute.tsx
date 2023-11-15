import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  if (
    !authContext.user &&
    !authContext.loading &&
    location.pathname.includes("payment")
  ) {
    return (
      <Navigate to={`/login?car=${location.pathname.split("/")[2]}`} replace />
    );
  } else if (
    !authContext.user &&
    !authContext.loading &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/login?redirect=true" replace />;
  }

  return <>{children}</>;
}
