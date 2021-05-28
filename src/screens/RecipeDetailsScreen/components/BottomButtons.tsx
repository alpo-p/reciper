import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LikeButton from '../../../components/LikeButton';
import SIcon from '../../../components/SIcon';
import theme from '../../../theme';

interface Props {
  handleLike: () => void
}

const BottomButtons = ({ handleLike }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SIcon size={30} color={theme.colors.lightBlack} name='arrow-left-circle-outline' 
        onPress={() => navigation.navigate('HomeScreen')} />
      <LikeButton bigger onPress={handleLike} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    backgroundColor: theme.colors.primaryWhite
  }
});

export default BottomButtons;