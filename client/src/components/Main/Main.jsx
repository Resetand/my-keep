import React, { Component } from "react";
import "./style.scss";
import { NoteList } from "../../containers/ListsContainers";
export default class extends Component {
  //
  render() {
    return (
      <div>
        <NoteList />
      </div>
    );
  }
}
