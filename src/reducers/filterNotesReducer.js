const initialState = {
  type: "UNKNOW",
  filter: ""
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_SEARCH_FILTER":
      return {
        type: "SEARCH",
        filter: payload.filter
      };

    case "FILTER_BY_LABEL":
      let curSet;
      if (state.type !== "LABEL") {
        curSet = new Set();
      } else {
        curSet = new Set(Array.from(state.filter));
      }

      if (curSet.has(payload.label)) {
        curSet.delete(payload.label);
      } else {
        curSet.add(payload.label);
      }
      return {
        type: "LABEL",
        filter: curSet
      };

    default:
      return state;
  }
}
