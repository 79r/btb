import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

/** pages */
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";

const Routes = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/start" component={StartPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
