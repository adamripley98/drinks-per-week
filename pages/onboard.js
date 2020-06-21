import React, { Component } from "react";
import Layout from "../components/layout";
import Form1 from "../components/onboarding/Form1";
import Form2 from "../components/onboarding/Form2";
import Form3 from "../components/onboarding/Form3";

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  changeTab(direction) {
    const { activeTab } = this.state;
    this.setState({ activeTab: activeTab + direction });
  }

  showCorrectTab() {
    const { activeTab } = this.state;
    if (activeTab === 1) {
      return <Form1 />;
    }
    if (activeTab === 2) {
      return <Form2 />;
    }
    if (activeTab === 3) {
      return <Form3 />;
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
        <button
          type="button"
          className="btn-purple btn-onboard mt-10"
          onClick={() => this.changeTab(1)}
        >
          Next →
        </button>
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
