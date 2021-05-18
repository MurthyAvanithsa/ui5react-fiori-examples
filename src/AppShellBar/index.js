import { Button, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import Logo from "../brandicon.png";

// const handleClick = (event) => {
//     setExpand((prevExpand) => !prevExpand);
//   };

export const AppShellBar = (props) => {
  return (
    <>
      <ShellBar
        logo={
          <img
            alt="logo"
            src={Logo}
            //   onClick={handleClick}
          />
        }
        primaryTitle={"Production"}
        secondaryTitle={"Well Completion"}
        startButton={<Button icon="paging" onClick={props.onMenuClick} />}
      >
        <ShellBarItem icon="employee" text="Profile" />
      </ShellBar>
    </>
  );
};
