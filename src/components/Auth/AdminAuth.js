import { useLocation, Navigate } from "react-router-dom";
import { useUser } from "../../hooks";

export default function AdminAuth({ children }) {

  const location = useLocation();
  const { user: { currentUser } } = useUser();

  if (currentUser) {
    if (currentUser.isAdmin) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};
