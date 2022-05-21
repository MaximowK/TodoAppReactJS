import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  onDoneClick = () => {
    this.props.onToggleDone();
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };
  onImportantClick = () => {
    this.props.onToggleImportant();
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };
  onDeleteClick = () => {
    this.props.onDelete();
  };

  render() {
    const { label, onToggleDone, onToggleImportant, important, done } =
      this.props;

    let classNames = done ? "todo-list-item done" : "todo-list-item ";
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={this.onDeleteClick}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
