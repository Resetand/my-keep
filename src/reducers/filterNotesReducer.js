const initialState = "";
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_SEARCH_FILTER":
      return payload.filter;
    default:
      return state;
  }
}
