import { ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
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
      <div style={{ display: "flex", height: "100%" }}>
        <AppSideNavigation collapsed={expand} />
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/well-completion" component={WellCompletion} />
            <Redirect from="/" to="/well-completion" />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
