import React, { Component } from "react";
import Link from "next/link";
import Beer from "../public/images/beer.png";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link href="/" className="logo-link">
          <img src={Beer} alt="logo" className="logo" />
        </Link>
        <h1 className="mr-auto pt-2 white">DrinksPerWeek</h1>
      </nav>
    );
  }
}

export default Nav;
