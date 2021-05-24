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
  color?: string
}

const SIcon = (props: Props) => {
  const { testID, name, onPress, size, color } = props;

  const _size: number = size ? size : 20;
  const _color: string = color ? color : theme.colors.primaryColor;

  return (
    <IconButton
      icon={(props) => <MaterialCommunityIcons name={name} {...props}/>}
      size={_size}
      color={_color}
      testID={testID}
      onPress={onPress}
    />
  );
};

export default SIcon;