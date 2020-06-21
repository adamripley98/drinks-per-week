import React, { Component } from "react";
import Layout from "../components/layout";
import Form1 from "../components/onboarding/Form1";
import Form2 from "../components/onboarding/Form2";
import Form3 from "../components/onboarding/Form3";

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      firstName: "",
      lastName: "",
      currentWeight: null,
      upperWeight: null,
      lowerWeight: null,
      baselineDrinks: null,
      addedDrinks: null,
      drinkCarryOver: false,
      penalties: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  changeTab(direction) {
    const { activeTab } = this.state;
    this.setState({ activeTab: activeTab + direction });
  }

  handleChange(e) {
    // Special case for handling penalty values
    if (e.target.className.indexOf("penalty-input") !== -1) {
      const penalties = { ...this.state.penalties };
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
      this.setState({ penalties });
    }
    // Special case for handling penalty checkboxes
    else if (e.target.className.indexOf("penalty") !== -1) {
      const penalties = { ...this.state.penalties };
      const name = e.target.name.substring(0, e.target.name.indexOf("Enabled"));
      if (penalties[name]) {
        penalties[name].enabled = e.target.checked;
      } else {
        penalties[name] = {
          enabled: e.target.checked
        };
      }
      this.setState({ penalties });
      // All other "normal" cases
    } else {
      const change = {};
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      change[e.target.name] = value;
      this.setState(change);
    }
  }

  submitOnboard() {
    console.log("TODO: submit to backend", this.state);
  }

  showCorrectTab() {
    const { activeTab } = this.state;
    if (activeTab === 1) {
      return (
        <Form1 handleChange={this.handleChange} onboardState={this.state} />
      );
    }
    if (activeTab === 2) {
      return (
        <Form2 handleChange={this.handleChange} onboardState={this.state} />
      );
    }
    if (activeTab === 3) {
      return (
        <Form3 handleChange={this.handleChange} onboardState={this.state} />
      );
    }
    // TODO
    return <Form1 />;
  }

  showButtons() {
    return (
      <div className="flex justify-around">
        {this.state.activeTab !== 1 ? (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10 mr-2"
            onClick={() => this.changeTab(-1)}
          >
            ← Previous
          </button>
        ) : null}
        {this.state.activeTab !== 3 ? (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10"
            onClick={() => this.changeTab(1)}
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            className="btn-purple btn-onboard mt-10"
            onClick={() => this.submitOnboard()}
          >
            Submit
          </button>
        )}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center">
          Welcome to DrinksPerWeek!
        </h1>
        <p className="text-l lg:text-xl xl:text-2xl text-center mb-10">
          We just need a bit more information from you before you can get
          started.
        </p>
        {this.showCorrectTab()}
        {this.showButtons()}
      </Layout>
    );
  }
}

export default Onboard;
