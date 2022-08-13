import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AdminCert = () => {
  const { store, actions } = useContext(Context);
  const [passcode, setPassCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(passcode);
    console.log(store.masterPasscode);
    if (passcode == store.masterPasscode) {
      actions.getAdminToken(passcode);
      navigate("/admin");
    }
  };
  return (
    <div className="container">
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="InputPassword"
              className="form-label ms-3 mb-3 h3 text-center"
            >
              Enter Master Passcode here
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="InputPassword"
              placeholder="Passcode"
              onChange={(e) => setPassCode(e.target.value)}
            />
            <button className="btn btn-lg btn-primary " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
