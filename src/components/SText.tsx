import React from 'react';
import { Text } from 'react-native-paper';

const SText = ({ ...props }: {children: React.ReactNode}) => (
  <Text>{props.children}</Text>
);


export default SText;