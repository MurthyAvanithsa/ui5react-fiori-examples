import { Icon, Input } from "@ui5/webcomponents-react";
import React, { useRef } from "react";

import { WCValueHelperDialog } from "./WCValueHelper";

export function QueryInput(props) {
  const dialogRef = useRef(null);
  const handleOpen = () => {
    dialogRef.current.open();
  };

  return (
    <>
      <Input
        icon={<Icon name="value-help" onClick={handleOpen} />}
        placeholder=""
      />
      <WCValueHelperDialog
        style={{ zIndex: 9999 }}
        dialogRef={dialogRef}
        queryHelperMeta={props.queryHelperMeta}
      />
    </>
  );
}
