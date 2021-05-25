import SplitPane from "react-split-pane";
import { AgGridTable } from "./AgGridTable";
import { DetailForm } from "./DetailForm";

export const Details = () => {
  return (
    <SplitPane split="vertical" minSize={50}>
      <div>
        <DetailForm />
      </div>
      <SplitPane split="horizontal">
        <div>
          <AgGridTable />
        </div>
        <div>
          <AgGridTable />
        </div>
      </SplitPane>
    </SplitPane>
  );
};
