import {
  Button,
  DynamicPage,
  DynamicPageTitle,
  Title,
} from "@ui5/webcomponents-react";
import SplitPane from "react-split-pane";
import { AgGridTable } from "./AgGridTable";
import { DetailForm } from "./DetailForm";
import { PropertyTable } from "./PropertyTable";

export const Details = () => {
  return (
    <DynamicPage
      headerContentPinnable={false}
      showHideHeaderButton={false}
      title={
        <DynamicPageTitle
          heading={<Title>WellCompletion: WC1000071</Title>}
          actions={[
            <Button key="add" design="Emphasized">
              Save
            </Button>,
            <Button key="copy" design="Transparent">
              Undo
            </Button>,
            <Button key="delete" design="Transparent">
              Delete
            </Button>,
          ]}
          navigationActions={[
            <Button key="decline" design="Transparent" icon="print" />,
          ]}
        />
      }
      style={{
        maxHeight: "100vh",
      }}
    >
      <div style={{ height: "calc(100vh - 113px)" }}>
        <SplitPane split="vertical">
          <DetailForm />
          <SplitPane split="horizontal" size="80%">
            <AgGridTable />
            <PropertyTable />
          </SplitPane>
        </SplitPane>
      </div>
    </DynamicPage>
  );
};
