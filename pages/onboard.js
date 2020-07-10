import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Form1 from "../components/onboarding/Form1";
import Form2 from "../components/onboarding/Form2";
import Form3 from "../components/onboarding/Form3";
import { useUser } from "../utils/auth/useUser";
import postRequest from "../utils/routes/post";
import { USER_ONBOARDING } from "../utils/routes/routeNames";

function Onboard() {
  const { loadingUser, user } = useUser();

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log("u", user);
    }
    // You also have your firebase app initialized
    // console.log(firebase);
  }, [loadingUser, user]);

  const [state, setState] = useState({
    activeTab: 1,
    firstName: "",
    lastName: "",
    currentWeight: "",
    upperWeight: "",
    lowerWeight: "",
    baselineDrinks: "",
    addedDrinks: "",
    drinkCarryOver: false,
    penalties: {}
  });

  function changeTab(direction) {
    const { activeTab } = state;
    setState({
      ...state,
      activeTab: activeTab + direction
    });
  }

  function handleChange(e) {
    // Special case for handling penalty values
    if (e.target.className.indexOf("penalty-input") !== -1) {
      const penalties = { ...state.penalties };
      let penaltyName;
      // for penalty value
      if (e.target.name.indexOf("Value") !== -1) {
        penaltyName = e.target.name.substring(
          0,
          e.target.name.indexOf("Value")
        );
        // For penalty drink penalty
      } else {
        penaltyName = e.target.name.substring(
          0,
          e.target.name.indexOf("Penalty")
        );
      }
      penalties[penaltyName][e.target.name] = e.target.value;
      setState({
        ...state,
        penalties
      });
    }
    // Special case for handling penalty checkboxes
    else if (e.target.className.indexOf("penalty") !== -1) {
      const penalties = { ...state.penalties };
      const name = e.target.name.substring(0, e.target.name.indexOf("Enabled"));
      if (penalties[name]) {
        penalties[name].enabled = e.target.checked;
      } else {
        penalties[name] = {
          enabled: e.target.checked
        };
      }
      setState({
        ...state,
        penalties
      });
      // All other "normal" cases
    } else {
      setState({
        ...state,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      });
    }
  }

  function submitOnboard() {
    postRequest(USER_ONBOARDING, state, user.token);
    // TODO Redirect to home page
  }

  function showCorrectTab() {
    const { activeTab } = state;
    if (activeTab === 1) {
      return <Form1 handleChange={handleChange} onboardState={state} />;
    }
    if (activeTab === 2) {
      return <Form2 handleChange={handleChange} onboardState={state} />;
    }
    if (activeTab === 3) {
      return <Form3 handleChange={handleChange} onboardState={state} />;
    }
    return <Form1 />;
  }

  function showButtons() {
    return (
      <div className="flex justify-around">
        {state.activeTab !== 1 ? (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10 mr-2"
            onClick={() => changeTab(-1)}
          >
            ← Previous
          </button>
        ) : null}
        {state.activeTab !== 3 ? (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10"
            onClick={() => changeTab(1)}
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10"
            onClick={() => submitOnboard()}
          >
            Submit
          </button>
        )}
      </div>
    );
  }

  return (
    <Layout>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center">
        Welcome to DrinksPerWeek!
      </h1>
      <p className="text-l lg:text-xl xl:text-2xl text-center mb-10">
        We just need a bit more information from you before you can get started.
      </p>
      {showCorrectTab()}
      {showButtons()}
    </Layout>
  );
}

export default Onboard;
