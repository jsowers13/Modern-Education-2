import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer container-fluid bg-light bottom-0 start-0 mt-auto py-3 text-center opacity-75">
    <p>
      Made with <i className="fa fa-clock text-success" /> by{" "}
      <a href="http://www.4geeksacademy.com">The Good Guys</a>
      <Link to="/adminlogin">
        <span className="float-end">Admin Login</span>
      </Link>
    </p>
  </footer>
);
