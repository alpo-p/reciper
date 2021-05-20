import React from 'react';
import SIcon from '../../../../../../../components/SIcon';

interface Props {
  onPress: () => void
}

const InfoButton = ({ onPress }: Props) => (
  <SIcon onPress={onPress} name='information-outline' testID='cardInfoButton' />
);

export default InfoButton;