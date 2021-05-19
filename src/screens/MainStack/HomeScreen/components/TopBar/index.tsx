import React from 'react';
import { View } from 'react-native';
import Logo from '../../../../../components/Logo';

interface Props {
  testID?: string
}

const TopBar = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
      <Logo />
    </View>
  );
};

export default TopBar;