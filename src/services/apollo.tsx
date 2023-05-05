"use client"
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import { ReactNode } from 'react';

interface IApolloProviderProps {
    children: ReactNode
}

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};

export const AppApolloProvider = ({ children }: IApolloProviderProps) => {
    const apolloClient = getClient()
    
    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    )
}

