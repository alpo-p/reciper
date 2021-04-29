import React from 'react';
import { StyleSheet, View } from 'react-native';
import SButton from '../../components/SButton';
import SText from '../../components/SText';
import theme from '../../theme';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <SText>Login or register to start using RecipeR</SText>
      <SButton>
        Login 
      </SButton>
      <SButton>
        Register
      </SButton>
    </View>
  );
};

const LoginContainer = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainPastel,
    height: theme.dimensions.height,
    padding: 50,
  },
  form: {

  }
});

export default LoginContainer;