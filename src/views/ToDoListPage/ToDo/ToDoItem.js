import React, { Component } from "react";
require("./styles.css");

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
    var itemClass = "todoitem.done";
    return (
      <li className={itemClass} ref={(li) => (this._listItem = li)}>
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={this.markCompleted}
          />{" "}
          {this.props.text}
        </label>
        <button type="button" className="btn-danger" onClick={this.deleteItem}>
          x
        </button>
      </li>
    );
  }
}

export default ToDoItem;
