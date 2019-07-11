import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "./style.scss";

export default class extends Component {
  state = {
    currentValue: ""
  };
  inputHandler = e => {
    this.setState(
      {
        currentValue: e.target.value
      },
      () => {
        this.props.setFilter(this.state.currentValue);
      }
    );
  };
  render() {
    //setFilter filter
    return (
      <div className="search-container">
        <form className="search-form">
          <span className="search-icon">
            <Icon> search </Icon>
          </span>
          <input
            placeholder="Найти заметку"
            className="search-input"
            type="search"
            name="searchNote"
            id="search"
            onChange={this.inputHandler}
            value={this.state.currentValue}
          />
        </form>
      </div>
    );
  }
}
