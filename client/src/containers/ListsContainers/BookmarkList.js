import { connect } from "react-redux";

import UIComponent from "../../components/SideBar/SideBarMenu/BookmarkList";

import * as notesActions from "../../actions/notesActions";
import * as editActions from "../../actions/currentEditNoteActions";

const getBookmarkNotes = notes => {
  return Object.keys(notes).reduce((visNotes, id) => {
    if (notes[id].bookmark) visNotes[id] = notes[id];
    return visNotes;
  }, {});
};

const mapState = state => ({
  bookmarkList: getBookmarkNotes(state.noteList)
});

const mapDispatch = dispatch => ({
  openNote: id => {
    dispatch(editActions.setNote(id));
  },
  removeFromBookmark: id => {
    dispatch(notesActions.toggleBookmarkAction(id));
  }
});

const container = connect(
  mapState,
  mapDispatch
)(UIComponent);

export default container;
