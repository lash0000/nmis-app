import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSession } from "../stores/Session.store";

export default function CheckAuth({ children }) {
  const { session, loading } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const isPublicRoute = location.pathname === "/";
  useEffect(() => {
    if (!loading && session && isPublicRoute) {
      navigate("/dashboard", { replace: true });
    }
  }, [loading, session, isPublicRoute, navigate]);

  if (isPublicRoute) {
    return children;
  }
  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        Checking session...
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this content.</p>
        <p>Your session is missing or expired.</p>
      </div>
    );
  }

  return children;
}
