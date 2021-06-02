import {
  Button,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  VariantManagement,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";

import { WCHeader } from "./WCHeader";
import { WellCompletionTable } from "./WCResults";
// import { WCValueHelperDialog } from "./WCValueHelper";

export const WellCompletion = () => {
  const dialogRef = useRef(null);
  const handleOpen = () => {
    dialogRef.current.open();
  };
  return (
    <FlexBox fitContainer>
      <DynamicPage
        title={
          <DynamicPageTitle
            actions={[
              <Button key="add">Create</Button>,
              <Button key="copy" design="Transparent">
                Copy
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
              <Button key="decline" design="Transparent" icon="print" />,
            ]}
          />
        }
        header={
          <DynamicPageHeader>
            <WCHeader handleValueHelp={handleOpen} />
          </DynamicPageHeader>
        }
        style={{
          maxHeight: "calc(100vh - 44px)",
        }}
      >
        <div
          className="ag-theme-balham"
          style={{ height: "calc(100vh - 113px)" }}
        >
          <WellCompletionTable />
        </div>
        {/* <WCValueHelperDialog dialogRef={dialogRef} /> */}
      </DynamicPage>
    </FlexBox>
  );
};
