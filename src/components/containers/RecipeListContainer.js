import { connect } from 'react-redux';
import RecipeList from '../simple/RecipeList';

const mapStateToProps = ({ recipes }) => {
  console.log('Inside recipe list', recipes);
  return { recipes };
};

const RecipeListContainer = connect(mapStateToProps)(RecipeList);
export default RecipeListContainer;
