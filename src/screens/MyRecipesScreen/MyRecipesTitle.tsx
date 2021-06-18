import React from 'react';
import { View } from 'react-native';
import STitle from '../../components/STitle';
import theme from '../../theme';

interface Props {
  testID?: string
}

const MyRecipesTitle = (props: Props) => {
  const { testID } = props;
  return (
    <View testID={testID}>
      <STitle style={{ color: theme.colors.primaryColor }}>Liked recipes</STitle>
    </View>
  );
};

export default MyRecipesTitle;