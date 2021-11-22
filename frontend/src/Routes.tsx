import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { RegisterPage } from "./pages/Register";
import { LoginPage } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
