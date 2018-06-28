import { FETCH_RECIPES } from '../actions/ActionTypes';

export default function(state = [], action) {
  console.log('Action Received', action);
  return action.type !== FETCH_RECIPES || action.error ? state : action.payload;
}
