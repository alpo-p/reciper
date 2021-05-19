import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Logo from '../../../../../components/Logo';

interface Props {
  testID?: string
}

const TopBar = (props: Props) => {
  const { testID } = props;
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.button}>
        <IconButton icon='heart' testID='myRecipesButton' />

      </View>
    </View>
  );
};

export default TopBar;