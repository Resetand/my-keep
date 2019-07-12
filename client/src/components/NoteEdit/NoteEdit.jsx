import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import Labels from "./Labels";
import Body from "./Body";
import "./style.scss";

export default class extends Component {
  state = {
    currentTitle: "",
    currentBody: "",
    labelValue: "",
  };
  titleChange = e => {
    this.setState({ currentTitle: e.target.value });
  };
  bodyChange = ({ editObj, text }) => {
    this.setState({ currentBody: { editObj, text } });
  };
  close = () => {
    this.props.closeModal();
    this.props.editHandle(this.props.id, {
      title: this.state.currentTitle,
      body: this.state.currentBody,
    });

    if (!this.state.currentTitle && !this.state.currentBody.text) {
      this.props.removeHandle(this.props.id);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ currentTitle: nextProps.title, currentBody: nextProps.body });
    }
  }
  saveLabel = label => {
    if (strIsEmpty(label)) return;
    this.props.addLabel(this.props.id, label);
  };
  clickLabel = label => {
    this.close();
    this.props.filerByLabel(label);
  };
  removeLabel = label => {
    this.props.removeLabel(this.props.id, label, this.props.noteList);
  };
  render() {
    const {
      id,
      bookmarkHandle,
      removeHandle,
      bookmark,
      closeModal,
      open,
      labels,
      labelList,
    } = this.props;

    if (!open) return null;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
        >
          <div className="modal-body note__body_lg">
            <Body
              title={this.state.currentTitle}
              body={this.state.currentBody}
              titleChange={this.titleChange}
              bodyChange={this.bodyChange}
            />
            <Labels
              labelList={labelList}
              labels={labels}
              addLabel={this.saveLabel}
              removeLabel={this.removeLabel}
              clickLabel={this.clickLabel}
            />
            <div className="note__options">
              <IconButton
                onClick={() => {
                  removeHandle(id);
                  closeModal();
                }}
              >
                <Icon>delete</Icon>
              </IconButton>

              <IconButton onClick={() => bookmarkHandle(id)}>
                {bookmark ? <Icon> bookmark</Icon> : <Icon>bookmark_border</Icon>}
              </IconButton>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

function strIsEmpty(str) {
  if (!str) return true;
  return (
    str
      .split("")
      .filter(sym => sym !== " ")
      .join("") === ""
  );
}
