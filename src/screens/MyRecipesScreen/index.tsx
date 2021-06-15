import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import TopBar from '../../components/TopBar';

interface Props {
  testID?: string
}

const MyRecipesScreen = (props: Props) => {
  const { testID  } = props;
  const navigation = useNavigation();

  const handleNavigateToHome = () => navigation.navigate('HomeScreen');
  const handleNavigateToAddARecipe = () => console.log('navigating to add a recipe');

  return (
    <View testID={testID}>
      <TopBar showNavigateHome 
        navigateToAddARecipe={handleNavigateToAddARecipe} 
        navigateToHome={handleNavigateToHome}
      />
    </View>
  );
};

export default MyRecipesScreen;