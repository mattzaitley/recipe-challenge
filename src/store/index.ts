import {
  compose,
  applyMiddleware,
  createStore,
  combineReducers,
  Reducer,
  CombinedState,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from '../categories/ducks/categories.reducer';
import { recipesReducer } from '../recipes/ducks/recipes-list.reducer';
import { recipeDetailsReducer } from '../recipes/ducks/recipe-details.reducer';
import { AppState } from '../types';

export const configureStore = () => {
  const rootReducer: Reducer<CombinedState<AppState>> = combineReducers({
    categories: categoriesReducer,
    recipesList: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  });

  const middlewareEnhancer = compose(applyMiddleware(thunk));

  const enhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, enhancers);

  return store;
};
