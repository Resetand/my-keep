import React from "react";
import ListItem from "../ListUI/ListItemUI";
import List from "../ListUI/";
import Icon from "@material-ui/core/Icon";

import "./style.scss";

export default function(props) {
  const { labels, filterByLabel, removeLabel } = props;
  const list = () => {
    const array = [];
    for (let label of labels) {
      array.push(
        <ListItem
          key={label}
          icon={<Icon fontSize="small">label</Icon>}
          onClick={() => filterByLabel(label)}
          omRemove={() => removeLabel(label)}
          title={label}
        />
      );
    }
    return array;
  };
  return <List title="Ярлыки">{list()}</List>;
}
