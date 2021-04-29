import React from 'react';
import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import theme from '../theme';

type Props = {
  style?: StyleProp<ViewStyle>,
  onPress?: (event: GestureResponderEvent) => void,
  children?: React.ReactNode
};

const SButton = ({ style, onPress, ...props }: Props) => {
  const buttonStyle = [styles.button, style];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    borderColor: theme.colors.gray,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.bigger,
    color: theme.colors.darkGray 
  }
});

export default SButton;
