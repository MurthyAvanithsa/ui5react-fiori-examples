import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";

import Logo from "../logo.jpg";

// const handleClick = (event) => {
//     setExpand((prevExpand) => !prevExpand);
//   };

export const AppShellBar = () => {
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
        primaryTitle={"OneUpstream"}
      >
        <ShellBarItem icon="employee" text="Profile" />
      </ShellBar>
    </>
  );
};
