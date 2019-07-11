import React, { Component } from "react";
import Note from "./Note";
import "./style.scss";

export default class extends Component {
  componentDidMount() {
    this.props.getNotes(20);
  }
  render() {
    const { editHandle, removeHandle, bookmarkHandle, noteList } = this.props;

    return (
      <div className="note-container">
        {Object.keys(noteList).map(id => (
          <Note
            editHandle={() => editHandle(id)}
            removeHandle={() => removeHandle(id)}
            bookmarkHandle={() => bookmarkHandle(id)}
            body={noteList[id].body}
            title={noteList[id].title}
            labels={noteList[id].labels}
            bookmark={noteList[id].bookmark}
            key={id}
          />
        ))}
      </div>
    );
  }
}
