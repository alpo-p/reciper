import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import LogoDark from '../../../../../components/LogoDark';
import theme from '../../../../../theme';
import { styles } from './styles';

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
        <IconButton 
          icon={(props) => <MaterialCommunityIcons name='heart' {...props} />}
          size={40}
          color={theme.colors.primaryColor}
          testID='myRecipesButton' 
          onPress={navigateToMyRecipes}
        />
      </View>
    </View>
  );
};

export default TopBar;