import React, { Component } from "react";
import TextEditor from "./TextEditor";

export default class Body extends Component {
  render() {
    const { title, body, titleChange, bodyChange } = this.props;
    console.log(typeof body);
    return (
      <div>
        <div className="note__inner">
          <input
            autoFocus
            placeholder="Введите название ..."
            onChange={titleChange}
            value={title}
            className="note__title"
          />
          <TextEditor body={body} onChange={bodyChange} />
          {/* <textarea
            placeholder="Начните писать ..."
            onChange={bodyChange}
            value={body}
            className="note__body note__body_edit"
          /> */}
        </div>
      </div>
    );
  }
}
