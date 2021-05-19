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
    <View testID={testID}>
      <Logo />
      <IconButton icon='heart' testID='myRecipesButton' />
    </View>
  );
};

export default TopBar;