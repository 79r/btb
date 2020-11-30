import React from "react";

const MainArea = React.lazy(() => import("./MainArea"));

const MainAreaComponent = () => (
  <React.Suspense fallback="Loading...">
    <MainArea />
  </React.Suspense>
);

export default MainAreaComponent;
