import React, { Component } from "react";

export default class Test extends Component {
  state = {
    user: {
      id: 1,
      name: "John",
      company: "test",
    },
    email: "john@smith.com",
  };

  updateUserState = (userFromParam) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        id: userFromParam.id,
        name: userFromParam.id,
      },
    });
  };

  render() {
    this.updateUserState({
      id: 2,
      name: "Aaron",
    });

    return <div>Test</div>;
  }
}
