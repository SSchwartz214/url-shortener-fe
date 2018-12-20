import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopUrlsContainer from "./TopUrlsContainer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TopUrlsContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
