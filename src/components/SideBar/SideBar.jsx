import React, { Component } from "react";
import Header from "./SideBarHeader";
import Menu from "./SideBarMenu";
import "./style.scss";

export default class extends Component {
  //
  render() {
    return (
      <div>
        <Header toggleMenu={this.props.toggleMenu} />
        <Menu />
      </div>
    );
  }
}
