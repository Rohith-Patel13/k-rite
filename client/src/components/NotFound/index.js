import { Navigate } from "react-router-dom";

import Cookies from "js-cookie";
import "./index.css";

const NotFound = () => {

  // const token = localStorage.getItem("jwtToken");
  const token = Cookies.get("jwtToken");
  if (!token) {
    // If token is not available, redirect to login page
    return <Navigate to="/login" />;
    
  }

  return(
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
  </div>
  );
}
export default NotFound;