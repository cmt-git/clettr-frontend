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
    uri: `http://${
      settings.environment == "development" ? "localhost:8878" : "clettr.com"
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
