import React from 'react';
import RecipeListItem, { RecipeListItemPropType } from './RecipeListItem';
import PropTypes from 'prop-types';

class RecipeList extends React.Component {
  recipeListItems() {
    return this.props.recipes.map(recipe => {
      return <RecipeListItem key={recipe.title} recipe={recipe} />;
    });
  }

  raiseInvoiceClicked() {
    const url = 'somesite.com&data=yourDataToSend';
    window.open(url, '_blank');
  }

  render() {
    return <ul className="list-group">{this.recipeListItems()}</ul>;
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(RecipeListItemPropType).isRequired,
};

export default RecipeList;
