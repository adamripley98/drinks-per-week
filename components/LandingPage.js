import React, { Component } from "react";
import Link from "next/link";
import Workout from "../public/images/workout.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-6">
            <h1 className="header-text mb-3">Keep off the beer gut!</h1>
            <h2>
              Reward yourself with alcohol only when you're meeting your fitness
              goals.
            </h2>
            <Link href="/register">
              <button type="button" className="btn-purple mt-4">
                TRY NOW
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={Workout} className="header-image" alt="workout" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
