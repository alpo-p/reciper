import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Constants from "expo-constants";
import AuthStorage from "./authStorage";

const httpLink = createHttpLink({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  uri: Constants.manifest.extra.backendDevUri as string,
  fetchOptions: {
    mode: 'no-cors',
  },
});

const createApolloClient = (authStorage: AuthStorage) => {
  const authLink = setContext(async (_, { headers }: {headers: Headers}) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;