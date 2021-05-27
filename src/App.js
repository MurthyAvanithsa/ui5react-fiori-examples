import { FlexBox, ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppShellBar } from "./AppShellBar";
import { Home } from "./Pages/Home";
import { AppSideNavigation } from "./AppSideNavigation";
import { WellCompletion } from "./Pages/WellCompletion";
import { Details } from "./Pages/WellCompletion/Details";

function App() {
  const [expand, setExpand] = React.useState(true);

  const handleClick = (event) => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <ThemeProvider>
      <AppShellBar onMenuClick={handleClick} />
      <FlexBox fitContainer>
        <AppSideNavigation collapsed={expand} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/well-completion" component={WellCompletion} />
            <Route exact path="/well-completion/details" component={Details} />
            <Redirect from="/" to="/well-completion" />
          </Switch>
        </BrowserRouter>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
