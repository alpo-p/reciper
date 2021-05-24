import React from 'react';

import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';
import { MaterialIconName } from '../../types';


interface Props {
  testID?: string
  name: MaterialIconName
  onPress: () => void
  size?: number
}

const SIcon = (props: Props) => {
  const { testID, name, onPress, size } = props;

  let _size: number;
  if (size === undefined) {
    _size = 20;
  } else {
    _size = size;
  }

  return (
    <IconButton
      icon={() => <MaterialCommunityIcons name={name} />}
      size={_size}
      color={theme.colors.primaryColor}
      testID={testID}
      onPress={onPress}
    />
  );
};

export default SIcon;