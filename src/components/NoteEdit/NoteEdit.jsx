import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Labels from "./Labels";
import "./style.scss";

export default class extends Component {
  state = {
    currentTitle: "",
    currentBody: "",
    labelValue: "",
    labelEditing: false
  };
  titleChange = e => {
    this.setState({ currentTitle: e.target.value });
  };
  labelEditToggle = e => {
    this.setState(state => ({
      labelEditing: !state.labelEditing
    }));
  };
  bodyChange = e => {
    this.setState({ currentBody: e.target.value });
  };
  close = () => {
    this.props.closeModal();
    this.props.editHandle(this.props.id, {
      title: this.state.currentTitle,
      body: this.state.currentBody
    });
    if (
      strIsEmpty(this.state.currentTitle) &&
      strIsEmpty(this.state.currentBody)
    ) {
      console.log("Пустая - сносим");
      this.props.removeHandle(this.props.id);
    }
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.open !== this.props.open) {
      this.setState({
        currentTitle: nextProps.title,
        currentBody: nextProps.body
      });
    }
  }
  saveLabel = label => {
    if (strIsEmpty(label)) return;
    this.props.addLabel(this.props.id, label);
  };
  clickLabel = e => {
    console.log("ТЫЫЫЫК");
  };
  removeLabel = label => {
    this.props.removeLabel(this.props.id, label);
  };
  render() {
    const {
      id,
      bookmarkHandle,
      removeHandle,
      bookmark,
      closeModal,
      open,
      labels
    } = this.props;
    if (!this.props.open) return null;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
        >
          <div className="modal-body">
            <span className="note__bookmark">
              <Icon>bookmark</Icon>
            </span>
            <div className="note__inner">
              <input
                autoFocus
                placeholder="Введите название ..."
                onChange={this.titleChange}
                value={this.state.currentTitle}
                className="note__title"
              />
              <textarea
                placeholder="Начните писать ..."
                onChange={this.bodyChange}
                value={this.state.currentBody}
                className="note__body note__body_edit"
              />
            </div>
            {/* labels, addLabel, removeLabel, clickLabel */}
            <Labels
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
                {bookmark ? (
                  <Icon> bookmark</Icon>
                ) : (
                  <Icon>bookmark_border</Icon>
                )}
              </IconButton>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

function strIsEmpty(str) {
  return (
    str
      .split("")
      .filter(sym => sym !== " ")
      .join("") === ""
  );
}
