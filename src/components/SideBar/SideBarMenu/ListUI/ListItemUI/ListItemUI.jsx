import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";

export default class extends Component {
  state = {
    selected: false,
    isOpen: false
  };
  onClick = () => {
    this.props.onClick();
    if (this.props.selectedStyle) {
      this.setState(state => ({
        selected: !state.selected
      }));
    }
  };
  toggleDialog = () => {
    if (!this.props.dialog) {
      this.props.onRemove();
    } else {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }
  };
  render() {
    const { title, icon, onRemove } = this.props;

    return (
      <div className="bookmark-list-item">
        <Dialog open={this.state.isOpen} onClose={this.toggleDialog}>
          <DialogTitle id="alert-dialog-title">
            {"Удалить ярлык: " + title}
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.toggleDialog} color="primary">
              Нет
            </Button>
            <Button
              onClick={() => {
                onRemove();
                this.toggleDialog();
              }}
              color="primary"
              autoFocus
            >
              Да
            </Button>
          </DialogActions>
        </Dialog>
        <ListItem selected={this.state.selected} button onClick={this.onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText
            primary={title.length > 25 ? title.slice(0, 25) + "..." : title}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={this.toggleDialog} size="small" edge="end">
              <Icon fontSize="small">close</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}
