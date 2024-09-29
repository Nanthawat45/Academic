import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const UserRedirect = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default UserRedirect;