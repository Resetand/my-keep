import { connect } from "react-redux";

import UIComponent from "../../components/SideBar/SideBarMenu/LabelList";

import * as notesActions from "../../actions/notesActions";
import * as editActions from "../../actions/currentEditNoteActions";
import * as labelsActions from "../../actions/labelsActions";

const mapState = state => ({
  labels: state.labels
});

const mapDispatch = dispatch => ({
  filterByLabel: label => {
    console.log("ЗДесь будет сложный диспатч");
  },
  removeLabel: label => {}
});

export default connect(
  mapState,
  mapDispatch
)(UIComponent);
