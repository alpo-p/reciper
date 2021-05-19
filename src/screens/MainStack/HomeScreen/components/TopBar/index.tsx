import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import LogoDark from '../../../../../components/LogoDark';
import { styles } from './styles';

interface Props {
  testID?: string
}

const TopBar = (props: Props) => {
  const { testID } = props;
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.logoContainer} >
        <LogoDark />
      </View>
      <View >
        <IconButton icon='heart' testID='myRecipesButton' />
      </View>
    </View>
  );
};

export default TopBar;