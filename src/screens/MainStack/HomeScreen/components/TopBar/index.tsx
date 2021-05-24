import React from 'react';
import { View } from 'react-native';

import LogoDark from '../../../../../components/LogoDark';
import { styles } from './styles';
import MyRecipesButton from './MyRecipesButton';

interface Props {
  testID?: string
  navigateToMyRecipes: () => void
}

const TopBar = (props: Props) => {
  const { testID, navigateToMyRecipes } = props;
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.emptyContainer}></View>
      <View style={styles.logoContainer} >
        <LogoDark />
      </View>
      <View style={styles.buttonContainer} >
        <MyRecipesButton onPress={navigateToMyRecipes} />
      </View>
    </View>
  );
};

export default TopBar;