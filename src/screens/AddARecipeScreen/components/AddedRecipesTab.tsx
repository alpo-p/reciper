import React from 'react';
import { FlatList, View } from 'react-native';
import FilledButton from '../../../components/FilledButton';
import Loading from '../../../components/Loading';
import RecipeCard from '../../../components/RecipeCard';
import SText from '../../../components/SText';
import useGetAddedRecipesByUser from '../../../hooks/useGetAddedRecipesByUser';
import theme from '../../../theme';
import { IRecipe } from '../../../types';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../../utils/utils';

const AddedRecipesTab = () => {
  const { data, loading } = useGetAddedRecipesByUser();

  if (loading) return <Loading />;

  const handleShowDetails = () => null;
  const handleDelete = (id: string) => console.log(id);

  const recipes: IRecipe[] | undefined = data?.recipesAddedByCurrentUser;

  if (!recipes) return <SText>No added recipes</SText>;

  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
      data={recipes}
      renderItem={({ item }) => (
        <View style={{marginBottom: 20}}>
          <FilledButton labelStyle={{ color: theme.colors.error }} onPress={() => handleDelete(item.id)}>Delete {item.name}</FilledButton>
          <RecipeCard 
            recipe={item} 
            hideButtons
            handleShowDetails={handleShowDetails}
          />
        </View>
      )}
      keyExtractor={(i) => i.id}
    />
  );
};

export default AddedRecipesTab;