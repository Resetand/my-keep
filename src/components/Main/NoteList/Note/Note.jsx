import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";
import Grow from '@material-ui/core/Grow';
import IconButton from "@material-ui/core/IconButton";
import "./style.scss";

export default class extends Component {
    state = {
      show: true
    };
    remove = () => {
        this.setState({show: false});
        setTimeout(this.props.removeHandle, 210);
    };
    render() {
        const {
          editHandle,
          bookmarkHandle,
          title,
          body,
          bookmark,
          labels
        } = this.props;
        return (<Grow appear={true} timeout={210} in={this.state.show}>
          <div className={bookmark ? "bookmark_note note" : "note"}>
            <div className="note__inner" onClick={editHandle}>
              <input className="note__title" value={title} readOnly />
              <textarea value={body} readOnly className="note__body" />
            </div>
            <div className="labels_sm">
              {labels.map(label => (
                <Chip
                  key={label}
                  className="label"
                  label={label}
                  onClick={() => {}}
                  size="small"
                />
              ))}
            </div>
            <div className="note__options">
              <IconButton onClick={editHandle}>
                <Icon>edit</Icon>
              </IconButton>

              <IconButton onClick={this.remove}>
                <Icon>delete</Icon>
              </IconButton>

              <IconButton onClick={bookmarkHandle}>
                {bookmark ? <Icon> bookmark</Icon> : <Icon>bookmark_border</Icon>}
              </IconButton>
            </div>
          </div>
        </Grow>
        );
  }
}
