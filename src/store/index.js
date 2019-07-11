import noteListReducers from "../reducers/notesReducer";
import filterNotesReducer from "../reducers/filterNotesReducer";
import currentEditNoteReducer from "../reducers/currentEditNoteReducer";
import labelsReducer from "../reducers/labelsReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    noteList: noteListReducers,
    noteListFilter: filterNotesReducer,
    currentEditNote: currentEditNoteReducer,
    labels: labelsReducer
  }),
  applyMiddleware(thunk)
);
