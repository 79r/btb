import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

/** pages */
import HomePage from "./pages/HomePage";
import Builder from "./pages/Builder";
import Templates from "./pages/Templates";

import PreloadScreen from "./PreloadScreen";

const Routes = () => {
  return (
    <Suspense fallback={<PreloadScreen />}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/start" component={Builder} />
        <Route path="/templates" component={Templates} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
