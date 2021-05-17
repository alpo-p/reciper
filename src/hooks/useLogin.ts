import { useApolloClient, useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import { ILogin } from '../types';
import AuthStorage from '../utils/authStorage';
import useAuthStorage from './useAuthStorage';

interface IAccessToken {
  token: string
}

interface IData {
  login: IAccessToken
}

const parseData = (data: unknown): IData => {
  if ((data as IData)?.login === undefined) {
    throw new Error('Data in incorrect format');
  }
  return data as IData;
};

const useLogin = () => {
  const apolloClient = useApolloClient();
  const authStorage: AuthStorage = useAuthStorage();

  const [login] = useMutation<{ login: IData }>(LOGIN);

  const signIn = async ({ username, password }: ILogin) => {
    const { data } = await login({
      variables: { username, password }
    });

    
    if (data) {
      const parsedData = parseData(data);
      await authStorage.setAccessToken(parsedData.login.token);
      void apolloClient.resetStore();
    }
  };

  return [signIn];
};

export default useLogin;