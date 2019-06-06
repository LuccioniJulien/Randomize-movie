import React from "react";
import { Login, Register } from "../fragments";

export default class Auth extends React.Component {

  state = {
    isSignInView: true
  };

  switchScreen = () =>
    this.setState({ isSignInView: !this.state.isSignInView });

  render() {
    const { isSignInView } = this.state;
    return (
      <>
        {isSignInView ? (
          <Login switchScreen={this.switchScreen} />
        ) : (
          <Register switchScreen={this.switchScreen} />
        )}
      </>
    );
  }
}
