import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopUrlsContainer from "./TopUrlsContainer";
import Form from "./Form";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

const Router = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/top" component={TopUrlsContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
