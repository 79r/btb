import React from "react";
const HomePage = React.lazy(() => import("./HomePage"));

const HomePageScreen = () => <HomePage />;

export default HomePageScreen;
