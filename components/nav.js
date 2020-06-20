import React, { Component } from "react";
import Link from "next/link";
import Beer from "../public/images/beer.png";

class Nav extends Component {
  render() {
    return (
      <nav className="flex navbar-dark p-2">
        <Link href="/" className="logo-link">
          <img src={Beer} alt="logo" className="logo" />
        </Link>
        <h1 className="pt-2 white text-3xl">DrinksPerWeek</h1>
      </nav>
    );
  }
}

export default Nav;
