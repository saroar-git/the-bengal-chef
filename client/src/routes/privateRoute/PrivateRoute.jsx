import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // loading image and navigate to desire location
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/78796f69321565.5b7d0cbe71285.gif"
          alt=""
        ></img>
      </div>
    );
  } else if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
