import React from "react";
import ListItem from "../ListUI/ListItemUI";
import List from "../ListUI";
import Icon from "@material-ui/core/Icon";

import "./style.scss";

export default function(props) {
  const { bookmarkList, openNote, removeFromBookmark } = props;
  return (
    <List title="В закладках">
      {Object.keys(bookmarkList).map(id => (
        <ListItem
          key={id}
          icon={<Icon fontSize="small">bookmark</Icon>}
          onClick={() => openNote(id)}
          onRemove={() => removeFromBookmark(id)}
          title={bookmarkList[id].title}
        />
      ))}
    </List>
  );
}
