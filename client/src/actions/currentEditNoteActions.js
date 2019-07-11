export const setNote = id => {
  return {
    type: "SET_NOTE",
    payload: { id }
  };
};
