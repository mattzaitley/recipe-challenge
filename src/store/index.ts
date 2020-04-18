import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from '../categories/ducks/categories.reducer';
import { recipesReducer } from '../recipes/ducks/recipes.reducer';

export const configureStore = () => {
  const rootReducer = combineReducers({
    categoriesReducer,
    recipesReducer,
  });

  const middlewareEnhancer = compose(applyMiddleware(thunk));

  const enhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, enhancers);

  return store;
};
