export const addLabelAction = label => {
  return {
    type: "ADD_LABEL_FROM_LIST",
    payload: { label }
  };
};
export const removeLabelAction = label => {
  return {
    type: "REMOVE_LABEL_FROM_LIST",
    payload: { label }
  };
};
export const setLabelsAction = labelsArray => {
  return {
    type: "SET_LABEL",
    payload: { labelsArray }
  };
};
