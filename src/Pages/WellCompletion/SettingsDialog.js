import {
  Bar,
  Button,
  ComboBox,
  ComboBoxItem,
  Dialog,
  Tab,
  TabContainer,
  TabSeparator,
  Title,
  Input,
} from "@ui5/webcomponents-react";

export const SettingsDialog = (props) => {
  const handleClose = () => {
    props.dialogSettingsRef.current.close();
  };
  return (
    <div>
      <Dialog
        draggable
        resizable
        ref={props.dialogSettingsRef}
        style={{ zIndex: 9999 }}
        footer={
          <Bar
            endContent={
              <>
                <Button onClick={handleClose} design="Emphasized">
                  OK
                </Button>
                <Button onClick={handleClose} design="Transparent">
                  Cancel
                </Button>
              </>
            }
          />
        }
        header={<Bar startContent={<Title>View Settings</Title>} />}
      >
        <TabContainer
          style={{
            height: "60vh",
            width: "900px",
          }}
        >
          <Tab selected text="Columns"></Tab>
          <TabSeparator />
          <Tab text="Sort" style={{ overflowY: "hidden" }}>
            <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
              Product
            </Title>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <ComboBox>
                <ComboBoxItem text="Equals" />
                <ComboBoxItem text="Does Not Equal" />
                <ComboBoxItem text="Greater Than" />
                <ComboBoxItem text="Less Than" />
              </ComboBox>
              <Input style={{ marginLeft: "1em", width: "100%" }} />
              <Button key="decline" design="Transparent" icon="decline" />
            </div>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <ComboBox>
                <ComboBoxItem text="Equals" />
                <ComboBoxItem text="Does Not Equal" />
                <ComboBoxItem text="Greater Than" />
                <ComboBoxItem text="Less Than" />
              </ComboBox>
              <Input style={{ marginLeft: "1em", width: "100%" }} />
              <Button key="decline" design="Transparent" icon="decline" />
            </div>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <ComboBox>
                <ComboBoxItem text="Equals" />
                <ComboBoxItem text="Does Not Equal" />
                <ComboBoxItem text="Greater Than" />
                <ComboBoxItem text="Less Than" />
              </ComboBox>
              <Input style={{ marginLeft: "1em", width: "100%" }} />
              <Button key="decline" design="Transparent" icon="decline" />
            </div>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <ComboBox>
                <ComboBoxItem text="Equals" />
                <ComboBoxItem text="Does Not Equal" />
                <ComboBoxItem text="Greater Than" />
                <ComboBoxItem text="Less Than" />
              </ComboBox>
              <Input style={{ marginLeft: "1em", width: "100%" }} />
              <Button key="decline" design="Transparent" icon="decline" />
            </div>
          </Tab>
          <TabSeparator />
          <Tab text="Filter">sdsdf</Tab>
        </TabContainer>
      </Dialog>
    </div>
  );
};
