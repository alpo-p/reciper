import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import theme from '../../theme';

interface Props {
  testID?: string
}

const Loading = (props: Props) => {
  const { testID } = props;
  return (
    <View style={styles.container} testID={testID}>
      <ActivityIndicator size='large' color={theme.colors.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.dimensions.height + theme.dimensions.statusBar,
    backgroundColor: 'rgba(0,0,0,.4)',
    justifyContent: 'center',
  }
});

export default Loading;