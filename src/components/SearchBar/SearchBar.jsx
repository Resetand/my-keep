import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import "./style.scss";

export default class extends Component {

  inputHandler = e => {
    this.props.setFilter(e.target.value);
  };
  resetFilerts = () => {
    this.setState({currentValue: ""});
    this.props.setFilter('');
  };
  render() {
    const { filter } = this.props.filter;
    console.log('size', filter.size);
    return (
      <div className="search-container">
        <form onSubmit={e => e.preventDefault()} className="search-form">
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
            value={this.props.filter.type !== 'SEARCH' ? "" : filter}
          />
          <Button onClick={this.resetFilerts}  className={`reset-bnt ${(!filter || !filter.size) ? "op-0" : ""}`} > Сбросить фильтры </Button>
        </form>
      </div>
    );
  }
}
