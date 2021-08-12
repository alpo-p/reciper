import React from 'react';
import { Alert, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import useLogin from '../../../../hooks/useLogin';
import SModal from '../../../../components/SModal';

import { styles } from './styles';
import { FormikForm } from './FormikForm';
import BoldText from '../../../../components/BoldText';
import { ILogin } from '../../../../types';
import Loading from '../../../../components/Loading';

interface Props {
  visible: boolean
  toggleVisible: () => void
  handleSubmit: (values: ILogin) => void
}

const Header = () => (
  <View style={styles.header}>
    <BoldText>Welcome back! Login below</BoldText>
  </View>
);

export const LoginModalView = ({ visible, toggleVisible, handleSubmit }: Props) => (
  <SModal style={styles.modalContainer} visible={visible} toggleVisible={toggleVisible}>
    <Header />
    <FormikForm onSubmit={handleSubmit}/> 
  </SModal>
);

const LoginModal = ({ visible, toggleVisible }: Omit<Props, 'handleSubmit'>) => {
  const { signIn, loading } = useLogin();
  const navigation = useNavigation();

  const handleSubmitLogin = async (values: ILogin) => {
    const { username, password } = values;

    let success: boolean;
    try {
      await signIn({ username, password });
      success = true;
    } catch (e) {
      if (e === 'Wrong username or password') {
        Alert.alert('Incorrect username or password');
      } else {
        Alert.alert('Troubles connecting to the server', 'Server seems to be sleeping: please wait a minute or two and try again');
      }
      success = false;
    }
    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }]
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <LoginModalView visible={visible} toggleVisible={toggleVisible} handleSubmit={handleSubmitLogin} />
  );
};

export default LoginModal;