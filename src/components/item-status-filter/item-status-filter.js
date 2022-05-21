import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  renderButtons = (filter) => {
    return this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const styleName = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${styleName}`}
          key={name}
          onClick={() => this.props.onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
  };
  render() {
    return (
      <div className="btn-group">{this.renderButtons(this.props.filter)}</div>
    );
  }
}
