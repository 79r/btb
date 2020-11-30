import React from "react";

const ActivityBar = React.lazy(() => import("./ActivityBar"));

const ActivityBarComponent = () => <ActivityBar />;

export default ActivityBarComponent;
