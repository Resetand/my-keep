import React from "react";
import ListItem from "../ListUI/ListItemUI";
import List from "../ListUI/";
import Icon from "@material-ui/core/Icon";

import "./style.scss";

export default function(props) {
  const { labels, filterByLabel, removeLabel, currentFilter } = props;
  const checkLabel = label => {
    return currentFilter.type !== "LABEL" ? false : currentFilter.filter.has(label);
  };
  const list = () => {
    const array = [];
    for (let label of labels) {
      array.push(
        <ListItem
          selectedStyle
          dialog
          removeIcon={<Icon fontSize="small">delete</Icon>}
          defaultSelected={checkLabel(label)}
          key={label}
          icon={<Icon fontSize="small">label</Icon>}
          onClick={() => filterByLabel(label)}
          onRemove={() => removeLabel(label)}
          title={label}
        />
      );
    }
    return array;
  };
  return <List title="Ярлыки">
    {list()}

  </List>;
}
