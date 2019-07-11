import { connect } from "react-redux";

import UIComponent from "../../components/Main/NoteList";

import * as notesActions from "../../actions/notesActions";
import * as editActions from "../../actions/currentEditNoteActions";
import * as labelsActions from "../../actions/labelsActions";

import serverAPI from "../../serverAPI";

const filterNotes = (notes, filter) => {
  if (!filter) return notes;

  return Object.keys(notes).reduce((visNotes, id) => {
    if (
      notes[id].body.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
      notes[id].title.toLowerCase().indexOf(filter.toLowerCase()) > -1
    ) {
      visNotes[id] = notes[id];
    }
    return visNotes;
  }, {});
};

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
    getNotes: count => {
      const asyncGetNotes = () => {
        return dispatch => {
          serverAPI.getNotes(count).then(notes => {
            dispatch(notesActions.setNotesAction(notes));
            dispatch(labelsActions.setLabelsAction(getLabelsFromNotes(notes)));
          });
        };
      };
      dispatch(asyncGetNotes());
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
