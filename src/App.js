import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: "100%", height: "100vh" }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <SideNavigation
          className=""
          fixedItems={
            <>
              <SideNavigationItem icon="chain-link" text="Useful Links" />
              <SideNavigationItem icon="history" text="History" />
            </>
          }
          onSelectionChange={function noRefCheck() {}}
          slot=""
          style={{}}
          tooltip=""
        >
          <SideNavigationItem icon="home" text="Home" />
          <SideNavigationItem expanded icon="group" text="People">
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
          <SideNavigationItem icon="locate-me" selected text="Locations" />
          <SideNavigationItem icon="calendar" text="Events">
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigation>
        <Link
          href="https://sap.github.io/ui5-webcomponents-react/"
          target="_blank"
          design={LinkDesign.Emphasized}
        >
          Getting Started with UI5 Web Component for React
        </Link>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
