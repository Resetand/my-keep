import { connect } from "react-redux";
import SerachBar from "../components/SearchBar";
import { setFilerAction } from "../actions/filterNotesActions";

const mapStateToProps = state => ({ filter: state.noteListFilter });
const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilerAction(filter))
  };
};

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SerachBar);

export default SearchBarContainer;
