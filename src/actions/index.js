import { FETCH_RECIPES } from './ActionTypes';
import axios from 'axios';

const URL = `http://www.recipepuppy.com/api/`;

export function fetchRecipes(ingredientsArray) {
  var queryString = ingredientsArray.join(',');
  var page1 = `${URL}?q=${queryString}&p=1`;
  var page2 = `${URL}?q=${queryString}&p=2`;
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  };
  const recepieFecthPromise = axios
    .all([
      axios.get(page1, {
        headers: headers,
      }),
      axios.get(page2, {
        headers: headers,
      }),
    ])
    .then(
      axios.spread(function(result1, result2) {
        // Both requests are now complete
        return [...result1.data.results, ...result2.data.results];
      }),
    );

  console.log('Action payload', recepieFecthPromise);
  return {
    type: FETCH_RECIPES,
    payload: recepieFecthPromise,
  };
}
