export const addNoteAction = note => {
  return {
    type: "ADD_NOTE",
    payload: {
      ...note,
      id: note.id || Math.random(),
      bookmark: note.bookmark || false,
      labels: note.labels || []
    }
  };
};

export const setNotesAction = notes => {
  return {
    type: "SET_NOTES",
    payload: { notes }
  };
};

export const editNoteAction = (id, editFields) => {
  delete editFields["id"];
  return {
    type: "EDIT_NOTE",
    payload: {
      id,
      ...editFields
    }
  };
};

export const toggleBookmarkAction = id => {
  return {
    type: "BOOKMARK_TOGGLE",
    payload: { id }
  };
};

export const removeNoteAction = id => {
  return {
    type: "REMOVE_NOTE",
    payload: { id }
  };
};

export const addLabelAction = (id, label) => {
  return {
    type: "ADD_LABEL",
    payload: { id, label }
  };
};
export const removeLabelAction = (id, label) => {
  return {
    type: "REMOVE_LABEL",
    payload: { id, label }
  };
};
