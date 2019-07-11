import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import "./style.scss";

export default class extends Component {
  //
  render() {
    const toggleMenu = this.props.toggleMenu;
    return (
      <div className="header-container">
        <div className="header__btn">
          <IconButton onClick={toggleMenu}>
            <Icon fontSize="large"> menu </Icon>
          </IconButton>
        </div>
        <div className="header__logo">
          <span className="icon page-icon" /> MyKeep
        </div>
      </div>
    );
  }
}
