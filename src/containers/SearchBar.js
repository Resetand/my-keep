import { connect } from "react-redux";
import SerachBar from "../components/SearchBar";
import { setSearchFilerAction } from "../actions/filterNotesActions";

const mapStateToProps = state => ({ filter: state.noteListFilter });
const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setSearchFilerAction(filter))
  };
};

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SerachBar);

export default SearchBarContainer;
