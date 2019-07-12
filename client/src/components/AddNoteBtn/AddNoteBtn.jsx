import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import "./style.scss";

export default class extends Component {
  createNewNote = async () => {
    const newId = Math.random();
    this.props.addNote({
      title: "",
      body: {
        text: "",
        editObj: false,
      },
      id: newId,
      labels: [],
      bookmark: false,
    });
    this.props.openModalFor(newId);
  };
  render() {
    return (
      <div>
        <Fab className="add-note-btn" color="inherit" onClick={this.createNewNote} aria-label="Add">
          <Icon>add</Icon>
        </Fab>
      </div>
    );
  }
}
