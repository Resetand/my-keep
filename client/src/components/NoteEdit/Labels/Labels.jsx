import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import AutosizeInput from "react-input-autosize";

export default class Labels extends Component {
  state = {
    labelEditing: false,
    labelValue: "",
    compliteHash: new Set(),
    cssEffect: false,
  };
  labelEditToggle = () => {
    this.setState(state => ({
      labelEditing: !state.labelEditing,
    }));
  };
  resetValue = () => {
    this.setState({ labelValue: "" });
  };
  saveLabel = () => {
    this.labelEditToggle();
    this.state.compliteHash.clear();
    if (this.props.labels.indexOf(this.state.labelValue) === -1) {
      this.props.addLabel(this.state.labelValue);
    }
    this.resetValue();
  };
  handleInput = e => {
    const value = this.autoComplite(e.target.value);
    console.log(value);
    if (value.length > 15) return;
    this.setState({
      labelValue: value,
    });
  };
  enterHandler = e => {
    if (e.charCode === 13) {
      this.saveLabel();
    }
  };

  autoComplite(value) {
    if (value.length < 3) return value;
    for (let label of this.props.labelList) {
      const hash = this.state.compliteHash;
      const val = value.toLowerCase();
      if (!hash.has(label) && label.toLowerCase().indexOf(val) > -1) {
        hash.add(label);
        this.animateInput();
        return label;
      }
    }
    return value;
  }
  animateInput() {
    this.setState({ cssEffect: true }, () =>
      setTimeout(() => this.setState({ cssEffect: false }), 800)
    );
  }
  render() {
    const { labels, removeLabel, clickLabel } = this.props;
    const { labelEditing, labelValue } = this.state;
    if (!labels) return null;
    return (
      <div>
        <div className="labels">
          {labels.map(label => (
            <Chip
              component={"div"}
              key={label}
              className="label"
              label={label}
              onClick={() => clickLabel(label)}
              onDelete={() => removeLabel(label)}
              size="small"
            />
          ))}
          <IconButton onClick={this.labelEditToggle} size="small">
            <Icon fontSize="small">add</Icon>
          </IconButton>

          {!labelEditing ? null : (
            <Tooltip disableHoverListener title="Не больше 15 символов">
              <AutosizeInput
                onBlur={this.saveLabel}
                onChange={this.handleInput}
                onKeyPress={this.enterHandler}
                autoFocus
                value={labelValue}
                className={`${this.state.cssEffect ? "labelAnimate" : ""} add-label-input`}
              />
            </Tooltip>
          )}
        </div>
      </div>
    );
  }
}
