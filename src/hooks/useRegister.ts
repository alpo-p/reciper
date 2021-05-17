import { useMutation } from '@apollo/client';
import { REGISTER } from '../graphql/mutations';
import { ILogin } from '../types';

interface IId {
  id: string
}

interface IData {
  addUser: IId
}

const parseData = (data: unknown): IData => {
  if ((data as IData)?.addUser === undefined) {
    throw new Error('Data in incorrect format');
  }
  return data as IData;
};

const useRegister = () => {
  const [register] = useMutation<{ register: IData }>(REGISTER);

  const signUp = async ({ username, password }: ILogin): Promise<boolean> => {
    const { data } = await register({
      variables: { username, password }
    });

    const parsedData = parseData(data);
    if (parsedData) {
      return true;
    } else {
      return false;
    }
  };

  return [signUp];
};

export default useRegister;