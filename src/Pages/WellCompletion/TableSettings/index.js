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
  CheckBox,
  Toolbar,
  ToolbarSpacer,
  Icon,
  FlexBox,
} from "@ui5/webcomponents-react";
import { useState } from "react";
import { spacing } from "@ui5/webcomponents-react-base";

import { FilterForm } from "./FilterTab";

export const SettingsDialog = (props) => {
  const [filterData, setFilterData] = useState([]);
  const handleClose = () => {
    props.dialogSettingsRef.current.close();
  };

  const handleAdd = () => {
    setFilterData((prevFilterData) => [...prevFilterData, <FilterForm />]);
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
          <Tab selected text="Columns">
            <Toolbar>
              <ToolbarSpacer />
              <Input placeholder="search" icon={<Icon name="value-help" />} />
              <Button>Show Selected</Button>
              <Button
                key="collapse-group"
                design="Transparent"
                icon="collapse-group"
              />
              <Button
                key="navigation-up-arrow"
                design="Transparent"
                icon="navigation-up-arrow"
              />
              <Button
                key="navigation-down-arrow"
                design="Transparent"
                icon="navigation-down-arrow"
              />
              <Button
                key="expand-group"
                design="Transparent"
                icon="expand-group"
              />
            </Toolbar>
            <div>
              <CheckBox text="Well Number" />
            </div>
            <div>
              <CheckBox text="Well Completion" />
            </div>
            <div>
              <CheckBox text="API WellNo" />
            </div>
            <div>
              <CheckBox text="API WC No" />
            </div>
            <div>
              <CheckBox text="WC Type" />
            </div>
            <div>
              <CheckBox text="County" />
            </div>
            <div>
              <CheckBox text="SHL Longitude" />
            </div>
            <div>
              <CheckBox text="SHL Latitude" />
            </div>
            <div>
              <CheckBox text="WC XRef1" />
            </div>
            <div>
              <CheckBox text="WC XRef2" />
            </div>
            <div>
              <CheckBox text="Well Class" />
            </div>
            <div>
              <CheckBox text="Rep Well Count" />
            </div>
            <div>
              <CheckBox text="Operated" />
            </div>
            <div>
              <CheckBox text="Operator" />
            </div>
            <div>
              <CheckBox text="Company Name" />
            </div>
            <div>
              <CheckBox text="Cost Center" />
            </div>
            <div>
              <CheckBox text="Viscocity" />
            </div>
            <div>
              <CheckBox text="Isothermal compressibility" />
            </div>
            <div>
              <CheckBox text="Velocity" />
            </div>
            <div>
              <CheckBox text="Fluid volume" />
            </div>
            <div>
              <CheckBox text="Pressure" />
            </div>
          </Tab>
          <TabSeparator />
          <Tab text="Sort" style={{ overflowY: "hidden" }}>
            <FlexBox>
              <ComboBox value="Well Number" style={{ width: "100%" }}>
                <ComboBoxItem text="Well Number" />
                <ComboBoxItem text="Well Completion" />
                <ComboBoxItem text="API WellNo" />
                <ComboBoxItem text="API WC No" />
              </ComboBox>
              <ComboBox
                value="Ascending"
                style={{ marginLeft: "1rem", width: "100%" }}
              >
                <ComboBoxItem text="Ascending" />
                <ComboBoxItem text="Decending" />
              </ComboBox>
              <Button
                style={{ marginLeft: "1rem" }}
                key="decline"
                design="Transparent"
                icon="message-error"
              />
              <Button key="add" design="Transparent" icon="add" />
            </FlexBox>
          </Tab>
          <TabSeparator />
          <Tab text="Filter">
            <FlexBox direction="Column">
              <FilterForm />
              {filterData.map((data, i) => (
                <div key={i}>{data}</div>
              ))}
              <FlexBox justifyContent="End">
                <Button
                  onClick={handleAdd}
                  style={spacing.sapUiMediumMarginEnd}
                >
                  Add
                </Button>
              </FlexBox>
            </FlexBox>
          </Tab>
        </TabContainer>
      </Dialog>
    </div>
  );
};
