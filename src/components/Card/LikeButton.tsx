import React from 'react';
import SIcon from '../SIcon';

interface Props {
  onPress: () => void
}

const LikeButton = ({ onPress }: Props) => (
  <SIcon onPress={onPress} name='heart-outline' testID='cardHeartButton' />
);

export default LikeButton;