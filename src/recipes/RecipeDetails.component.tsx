import React, { useEffect } from 'react';
import {
  CircularProgress,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Typography,
  CardContent,
} from '@material-ui/core';
import { useParams } from 'react-router';
import { RecipeDetail } from './ducks/recipes.types';
import { Nav } from '../components/Nav';
import { Instructions } from '../components/Instructions';
import { IngredientList } from '../components/IngredientList';
import { YouTubeEmbed } from '../components/YouTubeEmbed';

export interface RecipeDetailsProps {
  isFetching: boolean;
  fetchRecipeDetails: (id: string) => void;
  recipe: RecipeDetail;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    alignSelf: 'center',
    width: '90%',
    maxWidth: 640,
    marginTop: 24,
  },
  chip: {
    marginRight: 8,
  },
  title: {
    margin: '12px 0',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export const RecipeDetails: React.SFC<RecipeDetailsProps> = ({
  isFetching,
  fetchRecipeDetails,
  recipe,
}) => {
  const classes = useStyles();
  const { recipeId } = useParams();
  useEffect(() => {
    fetchRecipeDetails(recipeId);
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);
  if (isFetching || !recipe) {
    return (
      <div className={classes.container}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <Nav currentPathLabel={recipe.label} />
      <Card className={classes.card}>
        <CardActionArea>
          {recipe.youtubeURL ? (
            <YouTubeEmbed url={recipe.youtubeURL} title={recipe.label} />
          ) : (
            <CardMedia
              className={classes.media}
              image={recipe.thumbnailURL}
              title={recipe.label}
            />
          )}
        </CardActionArea>
        <CardContent>
          {recipe.cuisine && (
            <Chip
              label={recipe.cuisine}
              className={classes.chip}
              variant="outlined"
            />
          )}
          {recipe.category && (
            <Chip
              label={recipe.category}
              className={classes.chip}
              variant="outlined"
            />
          )}
          <Typography className={classes.title} variant="h5" component="h2">
            {recipe.label}
          </Typography>
          <IngredientList ingredients={recipe.ingredients} />
          <Instructions body={recipe.instructions} />
        </CardContent>
      </Card>
    </div>
  );
};
