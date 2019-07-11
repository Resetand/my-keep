const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NOTE":
      return payload.id;
    default:
      return state;
  }
};
