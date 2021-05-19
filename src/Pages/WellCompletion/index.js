import {
  Button,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  VariantManagement,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";

import { WCHeader } from "./WCHeader";
import { WellCompletionTable } from "./WCResults";
import { WCValueHelperDialog } from "./WCValueHelper";

export const WellCompletion = () => {
  const dialogRef = useRef(null);
  const handleOpen = (e) => {
    dialogRef.current.open();
  };
  return (
    <DynamicPage
      header={
        <DynamicPageHeader>
          <WCHeader handleValueHelp={handleOpen}></WCHeader>
        </DynamicPageHeader>
      }
      style={{
        maxHeight: "700px",
      }}
      title={
        <DynamicPageTitle
          actions={[
            <Button key="add" design="Transparent" icon="add" />,
            <Button key="copy" design="Transparent" icon="copy" />,
            <Button key="edit" design="Emphasized">
              Edit
            </Button>,
            <Button key="delete" design="Transparent">
              Delete
            </Button>,
          ]}
          heading={
            <VariantManagement
              onSelect={function noRefCheck() {}}
              selectedKey="1"
              variantItems={[
                { key: "1", label: "Standard" },
                { key: "2", label: "Advanced" },
              ]}
            />
          }
          navigationActions={[
            <Button key="decline" design="Transparent" icon="decline" />,
          ]}
        />
      }
    >
      <WellCompletionTable />
      <WCValueHelperDialog dialogRef={dialogRef} />
    </DynamicPage>
  );
};
