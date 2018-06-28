import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ recipe }) => {
  const imageUrl = recipe.thumbnail;

  function openRecipeDetails(url) {
    console.log('launch url', url);
    window.open(url, '_blank');
  }

  return (
    <li onClick={() => openRecipeDetails(recipe.href)} className="list-group-item container">
      <div className=".left">
        <img
          src={imageUrl}
          className="media-object img"
          onError={e => {
            e.target.src = '../../not-available.jpg';
          }}
        />
      </div>
      <div className="container-vertical right">
        <div>
          <b>Name :</b> {recipe.title}
        </div>
        <div>
          <b>Ingredients :</b> {recipe.ingredients}
        </div>
      </div>
    </li>
  );
};

export const RecipeListItemPropType = PropTypes.shape({
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

RecipeListItem.propTypes = {
  recipe: RecipeListItemPropType.isRequired,
};

export default RecipeListItem;
