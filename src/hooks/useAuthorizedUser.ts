import { useQuery } from '@apollo/client';

import { GET_AUTHORIZED_USER } from '../graphql/queries';

interface Iid {
  username: string
}

interface ICurrentUser {
  currentUser: Iid
}

const parseData = (data: unknown): ICurrentUser => {
  if ((data as ICurrentUser).currentUser === undefined) {
    throw new Error('Wrong data type');
  }
  return data as ICurrentUser;
};

const useAuthorizedUser = () => {
  const { data, loading, ...rest } = useQuery<ICurrentUser>(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  let authorizedUser: Iid | undefined;
  if (data) {
    const parsedData = parseData(data);
    authorizedUser = parsedData ? parsedData?.currentUser : undefined;
  }

  return { authorizedUser, loading, ...rest };
};

export default useAuthorizedUser;