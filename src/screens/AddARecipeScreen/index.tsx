import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View, Alert } from 'react-native';
import TopBar from '../../components/TopBar';
import { IRecipeForm } from '../../types';
import { FormikForm } from './FormikForm';
import { styles } from './styles';

import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  testID?: string
}

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;

  const navigation = useNavigation();
  const handleNavigateHome = () => navigation.navigate('HomeScreen');
  const handleNavigateMyRecipes = () => navigation.navigate('MyRecipes');

  const [picture, setPicture] = useState("https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png");

  const handleAddPicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if ( status !== 'granted') {
      Alert.alert('You need to give permission');
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    // result.uri not existing is some kind of bug, since it definitely does exist
    setPicture(result.uri);
  };

  const handleSubmit = (values: IRecipeForm) => console.log(values);

  return (
    <View style={styles.container} testID={testID}>
      <TopBar 
        hideNavigateToMyRecipes 
        showMyRecipes
        showNavigateHome
        navigateToHome={handleNavigateHome}
        navigateToMyRecipes={handleNavigateMyRecipes}
      />
      <ScrollView>
        <Image 
          style={{ width: 250, height: 250, alignSelf: 'center' }}
          source={{ uri: picture }} />
        <FormikForm onSubmit={handleSubmit} addPicture={handleAddPicture} />
        <View style={{height: 200}} />
      </ScrollView>
    </View>
  );
};

export default AddARecipeScreen;