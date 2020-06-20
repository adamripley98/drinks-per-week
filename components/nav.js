import React, { Component } from "react";
import Link from "next/link";
import Beer from "../public/images/beer.png";

class Nav extends Component {
  render() {
    return (
      <nav className="flex navbar-dark p-2">
        <Link href="/">
          <div className="inline-flex click">
            <img src={Beer} alt="logo" className="logo" />
            <h1 className="pt-2 white text-3xl">DrinksPerWeek</h1>
          </div>
        </Link>
      </nav>
    );
  }
}

export default Nav;
