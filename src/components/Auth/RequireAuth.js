import { useLocation, Navigate } from "react-router-dom";
import { useUser } from "../../hooks";

export default function RequireAuth({ children }) {

  let location = useLocation();
  let { user: { currentUser } } = useUser();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};
