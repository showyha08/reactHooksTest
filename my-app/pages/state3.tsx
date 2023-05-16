"use client";
import React, { ChangeEvent, Component } from "react";

export class State3 extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  forceUpdateHandler = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.forceUpdateHandler}>Force Update</button>
      </>
    );
  }
}
