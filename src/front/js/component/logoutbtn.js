import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const LogOutBtn = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/login");
    location.reload();
  };

  return (
    <button className="btn btn-primary" onClick={() => handleLogOut()}>
      Logout
    </button>
  );
};
