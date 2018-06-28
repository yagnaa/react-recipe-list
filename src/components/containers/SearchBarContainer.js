import { connect } from 'react-redux';
import SearchBar from '../simple/SearchBar';
import { fetchRecipes } from '../../actions';

const mapDispatchToProps = dispatch => {
  const onSearchTermEntered = terms => {
    dispatch(fetchRecipes(terms));
  };
  return {
    onSearchTermEntered,
  };
};

const SearchBarContainer = connect(
  null,
  mapDispatchToProps,
)(SearchBar);
export default SearchBarContainer;
