/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { IRecipe, IRecipeForm } from '../../../types';
import { FormikForm } from './FormikForm';
import { styles } from './../styles';

import * as ImagePicker from 'expo-image-picker';
import { uploadPictureToS3 } from '../../../utils/utils';
import useAddNewRecipe from '../../../hooks/useAddNewRecipe';

interface Props {
  testID?: string
}

const PLACEHOLDER_PICTURE = "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png";

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;

  const navigation = useNavigation();
  const handleNavigateHome = () => navigation.navigate('HomeScreen');

  const { addRecipe } = useAddNewRecipe();

  const [picture, setPicture] = useState(PLACEHOLDER_PICTURE);
  const [pictureUrl, setPictureUrl] = useState('');

  const handleAddPicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('You need to give permission');
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    // result.uri not existing is some kind of bug, since it definitely does exist
    const uri = result.uri;
    setPicture(uri);
    const response = await uploadPictureToS3(uri);
    response && setPictureUrl(response.postResponse.location);
  };

  const handleSubmit = async (values: IRecipeForm) => {
    if(pictureUrl === '') {
      Alert.alert('Please upload a picture');
      return;
    }
    const ingredients = values.ingredients.split(',');
    const stepByStepDirections = values.stepByStepDirections.split(',');
    const tags = values.tags.split(',');
    const preparationTimeInMinutes = Number(values.preparationTimeInMinutes);
    const numberOfServings = Number(values.numberOfServings);

    const recipe: Omit<IRecipe, 'id'> = {
      ...values,
      ingredients,
      stepByStepDirections,
      tags,
      preparationTimeInMinutes,
      numberOfServings,
      pictureUrl
    };
    await addRecipe(recipe);
    void handleNavigateHome();
    Alert.alert('Added the recipe!');
  };

  return (
    <View style={styles.container} testID={testID}>
      <ScrollView>
        <Image 
          style={{ width: 250, height: 250, alignSelf: 'center' }}
          source={{ uri: picture }} />
        <FormikForm onSubmit={handleSubmit} addPicture={handleAddPicture} />
        <View style={{height: 400}} />
      </ScrollView>
    </View>
  );
};

export default AddARecipeScreen;