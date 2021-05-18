import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import React, { useState } from "react";

export const AppSideNavigation = () => {
  const [expand, setExpand] = useState(true);

  const handleClick = (event) => {
    setExpand((prevExpand) => !prevExpand);
  };

  return (
    <SideNavigation
      // collapsed={expand}
      className=""
      onSelectionChange={function noRefCheck() {}}
      slot=""
      style={{}}
      tooltip=""
    >
      <SideNavigationItem icon="home" text="Home" />
      <SideNavigationItem icon="bbyd-dashboard" text="DashBoard" />
      <SideNavigationItem icon="action-settings" text="SetUp" />
      <SideNavigationItem expanded icon="lead-outdated" text="Revenue">
        <SideNavigationSubItem text="Doi Revenue" />
        <SideNavigationSubItem text="Contracts" />
        <SideNavigationSubItem text="Marketing Costs" />
      </SideNavigationItem>
      <SideNavigationItem icon="machine" selected text="Production">
        <SideNavigationSubItem text="Measurement Point" />
        <SideNavigationSubItem text="Well Completion" />
        <SideNavigationSubItem text="Gathering System" />
      </SideNavigationItem>
    </SideNavigation>
  );
};
