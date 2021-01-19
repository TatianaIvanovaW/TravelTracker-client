import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const client = new ApolloClient({
  uri: "https://traveltrackerserver.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
