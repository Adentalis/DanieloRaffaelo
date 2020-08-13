import React, { Component } from "react";
class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  markCompleted(event) {
    this.props.onItemCompleted(this.props.id);
  }
  deleteItem(event) {
    this.props.onDeleteItem(this.props.id);
  }

  render() {
    return (
      <li ref={(li) => (this._listItem = li)}>
        <label>
          <input type="checkbox" onChange={this.markCompleted} />{" "}
          {this.props.text}
        </label>
        <button type="button" onClick={this.deleteItem}>
          x
        </button>
      </li>
    );
  }
}

export default ToDoItem;
