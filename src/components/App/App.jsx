import React, { Component } from "react";
import Main from "../Main";
import SearchBarContainer from "../../containers/SearchBar";
import SideBar from "../SideBar";
import EditNote from "../../containers/EditNote";
import AddNote from "../../containers/AddNote";

import "./style.scss";

export default class extends Component {
  state = {
    sideBarIsOpen: true
  };
  toggleMenu = () => {
    this.setState(state => {
      return {
        sideBarIsOpen: !state.sideBarIsOpen
      };
    });
  };
  render() {
    return (
      <div
        className={`g-container ${
          this.state.sideBarIsOpen ? null : "sideBar_off"
        }`}
      >
        <EditNote />
        <hr className="header-line" />
        <div className="g-searchBar">
          <SearchBarContainer />
        </div>
        <div className="g-sideBar">
          <SideBar toggleMenu={this.toggleMenu} />
        </div>
        <main className="g-main">
          <Main />
        </main>
        <span className="add-note">
          <AddNote />
        </span>
      </div>
    );
  }
}
