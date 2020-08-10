import React, { Component } from "react";

export default class ToDoListPage extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        Es gibt viel zu tun Mylord
        <input
          type="text"
          className="form-control"
          onChange={this.handleTextChange}
          value={this.state.text}
        />
      </div>
    );
  }
}
