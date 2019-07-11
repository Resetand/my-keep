export const setSearchFilerAction = filter => {
  return {
    type: "SET_SEARCH_FILTER",
    payload: { filter }
  };
};
export const setLabelFilterAction = label => {
  return {
    type: "FILTER_BY_LABEL",
    payload: { label }
  };
};
