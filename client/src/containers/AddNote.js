import { connect } from "react-redux";
import AddNote from "../components/AddNoteBtn";
import * as notesActions from "../actions/notesActions";
import { setNote } from "../actions/currentEditNoteActions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    addNote: note => {
      dispatch(notesActions.addNoteAction(note));
    },
    openModalFor: id => {
      dispatch(setNote(id));
    }
  };
};

const addNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);

export default addNoteContainer;
