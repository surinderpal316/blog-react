import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authtentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO: We will make it easy
    if (authtentication && authStatus !== authtentication) {
      navigate("/login");
    } else if (!authtentication && authStatus !== authtentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authtentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
