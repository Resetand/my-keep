const initialState = new Set();
export default function(state = initialState, { type, payload }) {
  let copySet;
  switch (type) {
    case "ADD_LABEL_FROM_LIST":
      copySet = new Set(Array.from(state));
      copySet.add(payload.label);
      return copySet;
    case "REMOVE_LABEL_FROM_LIST":
      copySet = new Set(Array.from(state));
      copySet.delete(payload.label);
      return copySet;
    case "SET_LABEL":
      return new Set(payload.labelsArray);
    default:
      return state;
  }
}
