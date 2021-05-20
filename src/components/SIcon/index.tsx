import React from 'react';

import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';
import { MaterialIconName } from '../../types';


interface Props {
  testID?: string
  name: MaterialIconName
  onPress: () => void
}

const SIcon = (props: Props) => {
  const { testID, name, onPress } = props;
  return (
    <IconButton
      icon={() => <MaterialCommunityIcons name={name} />}
      size={20}
      color={theme.colors.primaryColor}
      testID={testID}
      onPress={onPress}
    />
  );
};

export default SIcon;