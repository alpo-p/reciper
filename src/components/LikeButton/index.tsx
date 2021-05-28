import React from 'react';
import SIcon from '../SIcon';

interface Props {
  onPress: () => void
  isPressed?: boolean
  bigger?: boolean
}

const LikeButton = ({ onPress, isPressed, bigger }: Props) => {
  const name = isPressed ? 'heart' : 'heart-outline';
  const size = bigger ? 30 : 20;
  return (
    <SIcon size={size} onPress={onPress} name={name} testID='cardHeartButton' />
  );
};

export default LikeButton;