import {
  Button,
  CheckBox,
  Dialog,
  FlexBox,
  Label,
  Input,
  Bar,
  Title,
} from "@ui5/webcomponents-react";
import ReactDOM from "react-dom";
import { spacing } from "@ui5/webcomponents-react-base";

export const SaveAsDialog = (props) => {
  const handleSaveAsClose = () => {
    props.saveAsRef.current.close();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Dialog
          style={{ zIndex: 9999 }}
          ref={props.saveAsRef}
          footer={
            <Bar
              endContent={
                <>
                  <Button onClick={handleSaveAsClose} design="Emphasized">
                    Save
                  </Button>
                  <Button onClick={handleSaveAsClose} design="Transparent">
                    Cancel
                  </Button>
                </>
              }
            />
          }
          header={<Bar startContent={<Title level="H5">Save View</Title>} />}
          headerText="Save View"
        >
          <FlexBox
            direction="Column"
            alignItems="Start"
            style={spacing.sapUiContentPadding}
          >
            <Label style={{}}>View:</Label>
            <Input value="Standard" style={{ width: "100%" }} />
            <CheckBox text="Set as Default" />
            <CheckBox text="Public" />
          </FlexBox>
        </Dialog>,
        document.body
      )}
    </>
  );
};
