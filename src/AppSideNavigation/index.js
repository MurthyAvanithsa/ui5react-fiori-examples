import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import React from "react";
import { createUseStyles } from "react-jss";

const styles = {
  ui5ListScrollContainer: {
    // overflow: "hidden",
    // width: "88px",
  },
};

const useStyles = createUseStyles(styles, { name: "AppSideNavigation" });

export const AppSideNavigation = (props) => {
  const classes = useStyles();

  // console.log("props: ", props);
  return (
    <div className={classes.ui5ListScrollContainer}>
      <SideNavigation
        // className={classes.RemScrollContainer}
        collapsed={props.collapsed}
      >
        <SideNavigationItem icon="home" text="Home" />
        <SideNavigationItem
          icon="bbyd-dashboard"
          text="DashBoard"
          // style={{ paddingRight: "1rem" }}
        />
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
    </div>
  );
};
