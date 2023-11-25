import { Routes } from '@/config/routes';
import { AUTH_TOKEN_KEY } from '@/lib/constants';
import { useToken } from '@/lib/hooks/use-token';
import {
  ApolloClient, from, InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import deepMerge from 'deepmerge';
import Cookies from 'js-cookie';
import isEqual from 'lodash/isEqual';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { useMemo } from 'react';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function mergePagination(existing: any, incoming: any) {
  return existing
    ? {
      ...incoming,
      data: [...existing.data, ...incoming.data],
    }
    : incoming;
}

function createApolloClient() {
  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get(AUTH_TOKEN_KEY);
    //TODO: log headers to see if cookies are being sent
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
    credentials: 'same-origin',
  });
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    const token = useToken();
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        if (message === 'VIKALABEL_ERROR.NOT_AUTHORIZED') {
          // every 401/unauthorized error will be caught here and update the global local state
          Cookies.remove(AUTH_TOKEN_KEY);
          Router.reload();
          // authorize(false);
        }
        if (message === 'EMAIL_NOT_VERIFIED') {
          token.setEmailVerified(false);
          Router.push(Routes.verifyEmail);
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    // @ts-ignore
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        // TODO: Improve this Product -> Order -> Product
        Product: {
          keyFields: false,
        },
        User: {
          fields: {
            address: {
              merge: false,
            },
          },
        },
        Type: {
          fields: {
            settings: {
              merge: true,
            },
          },
        },
        Query: {
          fields: {
            products: {
              keyArgs: [
                'search',
                'orderBy',
                'sortedBy',
                'language',
                'date_range',
              ],
              merge: mergePagination,
            },
            orders: {
              keyArgs: false,
              merge: mergePagination,
            },
            wishlists: {
              keyArgs: false,
              merge: mergePagination,
            },
            myQuestions: {
              keyArgs: false,
              merge(existing, incoming) {
                return existing
                  ? {
                      ...incoming,
                      data: [...existing.data, ...incoming.data],
                    }
                  : incoming;
              },
            },
            myReports: {
              keyArgs: false,
              merge(existing, incoming) {
                return existing
                  ? {
                      ...incoming,
                      data: [...existing.data, ...incoming.data],
                    }
                  : incoming;
              },
            },
            categories: {
              merge: true,
            },
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState?: NormalizedCacheObject | null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = deepMerge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });
    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
) {
  //@ts-ignore
  if (pageProps?.props) {
    //@ts-ignore
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: AppProps['pageProps']) {
  //@ts-ignore
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
