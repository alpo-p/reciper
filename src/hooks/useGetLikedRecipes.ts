import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';


interface Iid {
  id: string
  username: string
  likedRecipes: string[]
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

const useGetLikedRecipes = () => {
  const { data, loading, ...rest } = useQuery<ICurrentUser>(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const _loading = loading;
  const parsedData = parseData(data);
  const likedRecipes = parsedData.currentUser.likedRecipes;

  return { likedRecipes, _loading, ...rest };
};

export default useGetLikedRecipes;