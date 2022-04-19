import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AmplifyProvider>
          <App />
        </AmplifyProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
