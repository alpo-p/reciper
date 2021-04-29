import React from 'react';
import { Text } from 'react-native';

const SText = ({ ...props }: {children: React.ReactNode}) => (
  <Text>{props.children}</Text>
);

export default SText;