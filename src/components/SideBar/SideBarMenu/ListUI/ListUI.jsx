import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";

export default class extends Component {
  state = {
    open: true
  };
  render() {
    const { open } = this.state;
    return (
      <div className="list-container">
        <Button
          size="small"
          className="list-btn"
          onClick={() => {
            this.setState(state => ({
              open: !state.open
            }));
          }}
        >
          <ListSubheader
            component="div"
            className="list-header"
            id="nested-list-subheader"
          >
            {this.props.title}
          </ListSubheader>
          <Icon>{!open ? "expand_more" : "expand_less"}</Icon>
        </Button>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="nav">{this.props.children}</List>
        </Collapse>
        <Divider width="320" />
      </div>
    );
  }
}
