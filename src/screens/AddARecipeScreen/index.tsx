/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import TopBar from '../../components/TopBar';
import { IRecipeForm } from '../../types';
import { FormikForm } from './FormikForm';
import { styles } from './styles';

import { RNS3 } from 'react-native-upload-aws-s3';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  testID?: string
}

const PLACEHOLDER_PICTURE = "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png";

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;

  const navigation = useNavigation();
  const handleNavigateHome = () => navigation.navigate('HomeScreen');
  const handleNavigateMyRecipes = () => navigation.navigate('MyRecipes');

  const [picture, setPicture] = useState(PLACEHOLDER_PICTURE);

  const uploadPictureToS3 = async (uri: string): Promise<void> => {
    const name = uri.substr(uri.lastIndexOf('/'));

    const file = {
      uri,
      name,
      type: 'image/jpg'
    };

    const options = {
      bucket: 'reciper-pictures',
      region: 'eu-north-1',
      accessKey: Constants.manifest.extra.AWSAccessKeyId as string,
      secretKey: Constants.manifest.extra.AWSSecretKey as string,
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const response = await RNS3.put(file, options);
      if (response.status === 201) {
        console.log('Success: ', response.body);
      } else {
        console.log("Failure: ", response.body);
      }
    } catch(error) {
      console.log(error);
    }
  };

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
    await uploadPictureToS3(uri);
    setPicture(uri);
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