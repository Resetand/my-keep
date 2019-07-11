import { connect } from "react-redux";

import UIComponent from "../../components/SideBar/SideBarMenu/LabelList";

import * as filterActions from "../../actions/filterNotesActions";
import * as labelsActions from "../../actions/labelsActions";
import * as noteActions from "../../actions/notesActions";

const mapState = state => ({
  labels: state.labels
});

const mapDispatch = dispatch => ({
  filterByLabel: label => {
    dispatch(filterActions.setLabelFilterAction(label));
  },
  removeLabel: label => {
    dispatch(labelsActions.removeLabelAction(label));
    dispatch(noteActions.removeLabelFromNotesAction(label));
  }
});

export default connect(
  mapState,
  mapDispatch
)(UIComponent);
