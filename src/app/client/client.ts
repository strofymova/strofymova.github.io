import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { errorLink } from '../../app/client/errorLink';
import { URL } from '../../app/client/config';
import { TOKEN_KEY } from '../../app/store/token';
import possibleTypes from './possibleTypes.json';
import { storage } from '../../utility/storage';

const httpLink = createHttpLink({
  uri: `${URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = storage.get(TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client: ApolloClient<unknown> = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    possibleTypes,
  }),
});
