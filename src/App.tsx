import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core';
import { ConnectedCategoriesList as CategoriesList } from './categories/CategoriesList.connect';
import { ConnectedRecipesList as RecipesList } from './recipes/RecipesList.connect';
import { ConnectedRecipeDetails as RecipeDetails } from './recipes/RecipeDetails.connect';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap={true}>
            Recipe Getter!
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact={true}>
          <CategoriesList />
        </Route>
        <Route path="/:category" exact={true}>
          <RecipesList />
        </Route>
        <Route path="/:category/:recipeId">
          <RecipeDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
