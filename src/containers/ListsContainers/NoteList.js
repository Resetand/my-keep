import { connect } from "react-redux";

import UIComponent from "../../components/Main/NoteList";

import * as notesActions from "../../actions/notesActions";
import * as editActions from "../../actions/currentEditNoteActions";
import * as labelsActions from "../../actions/labelsActions";

import serverAPI from "../../serverAPI";
import storage from "../../localStorageAPI";

import filterNotes from "../helpers/filter";

const getLabelsFromNotes = notes => {
  return Object.keys(notes).reduce((labels, id) => {
    if (Array.isArray(notes[id].labels)) labels.push(...notes[id].labels);
    return labels;
  }, []);
};

const mapStateForVisible = state => {
  return {
    noteList: filterNotes(state.noteList, state.noteListFilter)
  };
};
const mapDispatchForVisible = dispatch => {
  return {
    getNotes: () => {
      const getNotesFromLocalStorage = () => {
        return dispatch => {
          const notes = storage.getNotes();
          console.log(notes);
          if (notes) {
            dispatch(notesActions.setNotesAction(notes));
            dispatch(labelsActions.setLabelsAction(getLabelsFromNotes(notes)));
          }
        };
      };
      dispatch(getNotesFromLocalStorage());
    },
    editHandle: id => {
      dispatch(editActions.setNote(id));
    },
    removeHandle: id => {
      dispatch(notesActions.removeNoteAction(id));
    },
    bookmarkHandle: id => {
      dispatch(notesActions.toggleBookmarkAction(id));
    }
  };
};

export default connect(
  mapStateForVisible,
  mapDispatchForVisible
)(UIComponent);
