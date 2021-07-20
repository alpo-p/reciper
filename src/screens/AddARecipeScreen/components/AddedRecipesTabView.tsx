import React from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback, View } from 'react-native';

import RecipeCard from '../../../components/RecipeCard';
import SIcon from '../../../components/SIcon';
import SText from '../../../components/SText';

import theme from '../../../theme';
import { IRecipe } from '../../../types';
import { BOTTOM_MARGIN_GLITCH_FIX_VALUE } from '../../../utils/utils';

interface ButtonProps {
  handleDelete: (id: string) => void
  item: IRecipe
}

const DeleteButton = ({ handleDelete, item }: ButtonProps)  => (
  <TouchableNativeFeedback onPress={() => handleDelete(item.id)}>
    <View style={styles.buttonContainer}>
      <SIcon name='trash-can' color={theme.colors.error}/>
      <SText>Delete {item.name}</SText>
    </View>
  </TouchableNativeFeedback>
);

interface Props {
  recipes: IRecipe[];
  handleDelete: (id: string) => void;
  handleShowDetails: (id: string) => void;
}
export const AddedRecipesTabView = ({ recipes, handleDelete, handleShowDetails }: Props) => (
  <FlatList
    style={{ marginBottom: BOTTOM_MARGIN_GLITCH_FIX_VALUE }}
    data={recipes}
    renderItem={({ item }) => (
      <View style={{ marginBottom: 20 }}>
        <DeleteButton handleDelete={handleDelete} item={item} />
        <RecipeCard
          recipe={item}
          hideButtons
          handleShowDetails={handleShowDetails} />
      </View>
    )}
    keyExtractor={(i) => i.id} />
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  }
});
