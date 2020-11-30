import React from "react";

const Sidebar = React.lazy(() => import("./Sidebar"));

const SidebarComponent = () => <Sidebar />;

export default SidebarComponent;
