import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
