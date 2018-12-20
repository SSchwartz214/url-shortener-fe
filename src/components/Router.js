import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopUrlsContainer from "./TopUrlsContainer";
import Form from "./Form";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/top" component={TopUrlsContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
