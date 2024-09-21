import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./input";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="MyLogo" title="Mankind4dev" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="aboutUs">About</Link>
          </li>
          <li>
            <Link to="contactUs">Contact</Link>
          </li>
        </ul>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </header>
    </>
  );
}
