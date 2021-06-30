import React from 'react';
import { View } from 'react-native';
import FilledButton from '../../components/FilledButton';
import FormikTextInput from '../../components/FormikTextInput';
import SText from '../../components/SText';
import { styles } from './styles';

interface I {
  onSubmit: () => void
  addPicture: () => void
}

export const FormView = ({ onSubmit, addPicture }: I) => (
  <View style={styles.formContainer}>
    <View style={styles.inputFields}>
      <FilledButton onPress={addPicture}>Add a picture</FilledButton>
      <FormikTextInput name="name" label="Name of the recipe" />
      <FormikTextInput multiline
        name="longDescription" label="The longish description of the recipe" />
      <FormikTextInput keyboardType={'number-pad'}
        name="preparationTimeInMinutes" label="Preparation time in minutes" />
      <FormikTextInput keyboardType={'number-pad'}
        name="numberOfServings" label="Number of servings from the recipe" />
      <SText style={{padding: 10}}>Separate tags, ingredients and directions by using commas.
       For example: "healthy, vegan, sandwich"</SText>
      <FormikTextInput name="tags" label="Tags for the recipe" />
      <FormikTextInput multiline name="ingredients" label="Ingredients for the recipe" />
      <FormikTextInput multiline name="stepByStepDirections" label="Directions for the recipe" />
      <View style={styles.formButton}>
        <FilledButton onPress={onSubmit}>Add the recipe</FilledButton>
      </View>
    </View>
  </View>
);