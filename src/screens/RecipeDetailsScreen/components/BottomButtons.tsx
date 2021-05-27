import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SIcon from '../../../components/SIcon';
import theme from '../../../theme';

const BottomButtons = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SIcon size={25} color={theme.colors.lightBlack} name='arrow-left-circle-outline' 
        onPress={() => navigation.navigate('HomeScreen')} />
      <SIcon size={25} name='heart' 
        onPress={() => console.log("liked the recipe")} />
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