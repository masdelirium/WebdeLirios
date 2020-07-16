import Vue from 'vue';
import * as RealmWeb from "realm-web";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

console.log('  ---- Using Apollo ---- ');

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.uri,
});

const app = new RealmWeb.App({ id: process.env.id });

// Add an Authorization header with a valid user access token to all GraphQL requests
const authorizationHeaderLink = setContext(async (_, { headers }) => {
  if (app.currentUser) {
    // Refreshing custom data also refreshes the access token
    //await app.currentUser.refreshCustomData();
  } else {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.apiKey(process.env.key));
  }
  // Get a valid access token for the current user
  const { accessToken } = app.currentUser;

  // Set the Authorization header, preserving any other headers
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  };
});


// Create the apollo client
const apolloClient = new ApolloClient({
  link: authorizationHeaderLink.concat(httpLink),
  cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;