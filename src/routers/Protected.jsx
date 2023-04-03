import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected;
