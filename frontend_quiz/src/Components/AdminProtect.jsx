import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
//Pour installer ce package : npm install jwt-token@latest
import { jwtDecode } from "jwt-decode";

function Protected() {
  const token = Cookies.get("token");
  let access = false;
  if (token) {
    const decodeToken = jwtDecode(token);
    access = decodeToken.isAdmin;
  }

  return access ? <Outlet /> : <Navigate to="/connexion" />;
}

export default Protected;
