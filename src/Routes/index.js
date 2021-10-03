import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const IsTriangle = React.lazy(() => import("../screens/IsTriangle"));
const Hypotenuse = React.lazy(() => import("../screens/Hypotenuse"));
const Area = React.lazy(() => import("../screens/Area"));
const TriangleQuiz = React.lazy(() => import("../screens/TriangleQuiz"));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" render={(props) => <IsTriangle {...props} />} />
        <Route
          exact
          path="/hypotenuse"
          render={(props) => <Hypotenuse {...props} />}
        />
        <Route exact path="/area" render={(props) => <Area {...props} />} />
        <Route
          exact
          path="/triangle-quiz"
          render={(props) => <TriangleQuiz {...props} />}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
