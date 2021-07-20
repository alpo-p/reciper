import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import Loading from '../../../components/Loading';
import RecipeCard from '../../../components/RecipeCard';
import SIcon from '../../../components/SIcon';
import SText from '../../../components/SText';

import useDeleteRecipe from '../../../hooks/useDeleteRecipe';

import useGetAddedRecipesByUser from '../../../hooks/useGetAddedRecipesByUser';
import theme from '../../../theme';
import { IRecipe } from '../../../types';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../../utils/utils';

interface ButtonProps {
  handleDelete: (id: string) => void
  item: IRecipe
}

const DeleteButton = ({ handleDelete, item }: ButtonProps)  => (
  <TouchableNativeFeedback style={styles.buttonContainer} onPress={() => handleDelete(item.id)}>
    <SIcon name='trash-can' color={theme.colors.error}/>
    <SText>Delete {item.name}</SText>
  </TouchableNativeFeedback>
);

// Unfortunately this cannot be refactored into its own file
const useForceUpdate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
};

const AddedRecipesTab = () => {
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

  return (
    <FlatList
      style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
      data={recipes}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20 }}>
          <DeleteButton handleDelete={handleDelete} item={item}/>
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

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  }
});

export default AddedRecipesTab;