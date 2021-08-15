import React from "react";

import { Route, Switch, useHistory } from "react-router-dom";

import { LandingPage } from "./LandingPage/LandingPage";
import { List } from "./TodoList/List";

export const Main = (props) => {
  const history = useHistory();
  console.log("Fordorth.com: TODO List -> Main -> props", props);
  console.log("Fordorth.com: TODO List -> Main -> history", history);
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/list" component={List} />
    </Switch>
  );
};
