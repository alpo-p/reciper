import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import TopBar from '../../components/TopBar';
import { IRecipeForm } from '../../types';
import { FormikForm } from './FormikForm';
import { styles } from './styles';

interface Props {
  testID?: string
}

const AddARecipeScreen = (props: Props) => {
  const { testID } = props;
  const navigation = useNavigation();
  const handleSubmit = (values: IRecipeForm) => console.log(values);

  const handleNavigateHome = () => navigation.navigate('HomeScreen');
  const handleNavigateMyRecipes = () => navigation.navigate('MyRecipes');

  return (
    <View style={styles.container} testID={testID}>
      <TopBar 
        hideNavigateToMyRecipes 
        showMyRecipes
        showNavigateHome
        navigateToHome={handleNavigateHome}
        navigateToMyRecipes={handleNavigateMyRecipes}
      />
      <FormikForm onSubmit={handleSubmit}/>
    </View>
  );
};

export default AddARecipeScreen;