import React, { Component } from "react";
import Link from "next/link";
import Workout from "../public/images/workout.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="container px-4 pt-24 md:pt-32 mx-auto">
        <div className="lg:flex items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Keep off the beer gut!
            </h1>
            <h2 className="text-xl lg:text-2xl mt-6">
              Reward yourself with alcohol only when you're meeting your fitness
              goals.
            </h2>
            <Link href="/register">
              <button type="button" className="btn-purple mt-4">
                TRY NOW
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img src={Workout} alt="workout" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
