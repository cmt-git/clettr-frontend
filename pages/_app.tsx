import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "../scripts/redux/rootReducer";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import settings from "../settings.json";
import Web3 from "web3";

export const store = createStore(rootReducers);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`GraphQL error: ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: `${
      settings.environment == "development"
        ? "http://localhost:8878"
        : "http://159.223.39.105:8878"
    }/api/graphql`,
    credentials: "include",
  }),
]);

const client = new ApolloClient({
  credentials: "include",
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: link,
});

export const ganacheProvider = new Web3.providers.WebsocketProvider(
  settings.environment == "development"
    ? "ws://localhost:7545"
    : "ws://159.223.39.105:7545"
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
