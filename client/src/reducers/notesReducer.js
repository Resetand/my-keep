const initialState = {
  0: {
    title: "Заголовок",
    body: {
      text: "Напишите сюда что-то",
      editObj: false,
    },
    id: 0,
    bookmark: true,
    labels: [],
  },
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_LABEL":
      const labels = state[payload.id].labels;
      const newLabels = [...labels];
      newLabels.push(payload.label);
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          labels: newLabels,
        },
      };
    case "REMOVE_LABEL":
      const note = state[payload.id];
      const index = note.labels.indexOf(payload.label);
      return {
        ...state,
        [payload.id]: {
          ...note,
          labels: [...note.labels.slice(0, index), ...note.labels.slice(index + 1)],
        },
      };
    case "REMOVE_LABEL_FOR_NOTES":
      return Object.keys(state).reduce(
        (newState, id) => {
          const labels = state[id].labels.filter(label => label !== payload.label);
          newState[id].labels = labels;
          return newState;
        },
        { ...state }
      );

    case "SET_NOTES":
      return { ...payload.notes };
    case "EDIT_NOTE":
      console.log(payload);
      return {
        ...state,
        [payload.id]: Object.keys(payload).reduce(
          (newState, key) => {
            newState[key] = payload[key];
            return newState;
          },
          { ...state[payload.id] }
        ),
      };
    case "ADD_NOTE":
      return {
        ...state,
        [payload.id]: payload,
      };
    case "BOOKMARK_TOGGLE":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          bookmark: !state[payload.id].bookmark,
        },
      };
    case "REMOVE_NOTE":
      return Object.keys(state).reduce((newState, id) => {
        if (id.toString() !== payload.id.toString()) {
          newState[id] = state[id];
        }
        return newState;
      }, {});

    default:
      return state;
  }
}
