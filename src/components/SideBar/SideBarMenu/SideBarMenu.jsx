import React, { Component } from "react";
import { BookmarkList } from "../../../containers/ListsContainers";
import { LabelList } from "../../../containers/ListsContainers";
import "./style.scss";

export default class extends Component {
  //
  render() {
    return (
      <div className="searchBar-menu">
        <BookmarkList />
        <LabelList />
      </div>
    );
  }
}
