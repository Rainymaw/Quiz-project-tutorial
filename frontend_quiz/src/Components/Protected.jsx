import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function Protected() {
  const token = Cookies.get("token");

  return token ? <Outlet /> : <Navigate to="/connexion" />;
}

export default Protected;
