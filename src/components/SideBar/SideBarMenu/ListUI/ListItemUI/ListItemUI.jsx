import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

export default function(props) {
  const { title, icon, onClick, onRemove } = props;
  return (
    <div className="bookmark-list-item">
      <ListItem button onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={title.length > 25 ? title.slice(0, 25) + "..." : title}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={onRemove}
            size="small"
            edge="end"
            aria-label="Comments"
          >
            <Icon fontSize="small">close</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
