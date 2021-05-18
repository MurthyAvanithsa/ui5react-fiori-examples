import { FlexBox, ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppShellBar } from "./AppShellBar";
import { Home } from "./Pages/Home";
import { AppSideNavigation } from "./AppSideNavigation";
import { WellCompletion } from "./Pages/WellCompletion";

function App() {
  const [expand, setExpand] = React.useState(true);

  const handleClick = (event) => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <ThemeProvider>
      <AppShellBar onMenuClick={handleClick} />
      <FlexBox
        style={{ width: "100%", height: "100vh" }}
        // direction={FlexBoxDirection.Column}
        // justifyContent={FlexBoxJustifyContent.Center}
      >
        <AppSideNavigation collapsed={expand} />
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/well-completion" component={WellCompletion} />
            {/* <Route path="/detail" component={Detail} /> */}
            <Redirect from="/" to="/well-completion" />
          </Switch>
        </BrowserRouter>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
