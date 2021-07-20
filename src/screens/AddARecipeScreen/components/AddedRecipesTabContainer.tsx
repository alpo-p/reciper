import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import Loading from '../../../components/Loading';
import SText from '../../../components/SText';

import useDeleteRecipe from '../../../hooks/useDeleteRecipe';

import useGetAddedRecipesByUser from '../../../hooks/useGetAddedRecipesByUser';
import { IRecipe } from '../../../types';
import { AddedRecipesTabView } from './AddedRecipesTabView';

// Unfortunately this cannot be refactored into its own file
const useForceUpdate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
};

const AddedRecipesTabContainer = () => {
  const { data, loading } = useGetAddedRecipesByUser();
  const { deleteRecipe } = useDeleteRecipe();
  const navigation = useNavigation();

  const forceUpdate = useForceUpdate();

  if (loading) return <Loading />;

  const handleDelete = (id: string) => {
    Alert.alert(
      '',
      'Are you sure you want to delete this recipe?',
      [
        {
          text: "Cancel",
          onPress: () => { return; },
          style: "cancel"
        },
        { text: "OK", onPress: async () => {
          forceUpdate();
          await deleteRecipe(id); 
        }}
      ]
    );
  };

  const recipes: IRecipe[] | undefined = data?.recipesAddedByCurrentUser;

  if (!recipes) return <SText>No added recipes</SText>;

  const handleShowDetails = (id: string) => 
    navigation.navigate('RecipeDetails', {
      recipe: recipes.find(r => r.id === id),
      likedRecipes: recipes,
    });

  return <AddedRecipesTabView recipes={recipes} handleDelete={handleDelete} handleShowDetails={handleShowDetails} />;
};

export default AddedRecipesTabContainer;