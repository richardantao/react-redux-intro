import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import { 
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";

export default () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Provider>
  );
};
