import { connect } from "react-redux";
import UIComponent from "../components/NoteEdit";

import store from "../store";

import * as notesActions from "../actions/notesActions";
import * as labelsActions from "../actions/labelsActions";
import * as editActions from "../actions/currentEditNoteActions";
import * as filterNotesActions from "../actions/filterNotesActions";

const checkLabelExist = (notes, label) => {
  return Object.keys(notes).some(noteID => {
    return notes[noteID].labels.indexOf(label) > -1;
  });
};

const mapStateToProps = state => {
  return state.noteList[state.currentEditNote]
    ? {
        ...state.noteList[state.currentEditNote],
        labelList: state.labels,
        open: true,
      }
    : { open: false };
};

// editHandle, removeHandle, bookmarkHandle
const mapDispatchToProps = dispatch => {
  return {
    filerByLabel: label => {
      dispatch(filterNotesActions.setLabelFilterAction(label));
    },
    addLabel: (id, label) => {
      dispatch(notesActions.addLabelAction(id, label));
      dispatch(labelsActions.addLabelAction(label));
    },
    removeLabel: (id, label) => {
      dispatch(notesActions.removeLabelAction(id, label));
      if (!checkLabelExist(store.getState().noteList, label))
        dispatch(labelsActions.removeLabelAction(label));
    },
    editHandle: (id, editFields) => {
      dispatch(notesActions.editNoteAction(id, editFields));
    },
    removeHandle: id => {
      dispatch(notesActions.removeNoteAction(id));
    },
    bookmarkHandle: id => {
      dispatch(notesActions.toggleBookmarkAction(id));
    },
    closeModal: () => {
      dispatch(editActions.setNote(false));
    },
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UIComponent);

export default ModalContainer;
