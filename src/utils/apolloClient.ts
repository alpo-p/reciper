/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// import Constants from "expo-constants";
import AuthStorage from "./authStorage";

const uri = "http://gentle-reaches-48944.herokuapp.com/graphql"; // wouldn't want to put this here, but have to for now so .apk works...

// Expo constants are bringing troubles in production build. Will figure out later how to fix this...
/*
try {
  const env = Constants?.manifest?.extra?.env as string;
  if (env) {
    uri = env === 'development' 
      ? Constants.manifest.extra.backendDevUri as string
      : Constants?.manifest?.extra?.backendProductionUri as string;
  }
} catch (e) {
  console.log("caught error in apolloClients.ts:", e);
}
*/

const httpLink = createHttpLink({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  uri,
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