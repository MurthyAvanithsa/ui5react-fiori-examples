import {
  Bar,
  Button,
  CheckBox,
  ComboBox,
  ComboBoxItem,
  Dialog,
  FilterBar,
  FilterGroupItem,
  Input,
  Label,
  MultiInput,
  Option,
  Tab,
  TabContainer,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Title,
  Token,
  Select,
  MultiComboBox,
  MultiComboBoxItem,
} from "@ui5/webcomponents-react";
import React from "react";
import { Grid } from "@material-ui/core";
import { spacing } from "@ui5/webcomponents-react-base";

export const WCValueHelperDialog = (props) => {
  const handleClose = () => {
    props.dialogRef.current.close();
  };

  return (
    <Dialog
      resizable
      draggable
      ref={props.dialogRef}
      style={{ zIndex: 9999 }}
      className=""
      footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
      header={<Bar startContent={<Title>Well Completion</Title>} />}
      headerText="Dialog Header"
    >
      <TabContainer
        className=""
        onTabSelect={function noRefCheck() {}}
        slot=""
        style={{
          height: "80vh",
          width: "900px",
        }}
        tooltip=""
      >
        <Tab selected text="Search and Select">
          <FilterBar
            activeFiltersCount
            // filterContainerWidth="13.125rem"
            showFilterConfiguration={false}
            showGoOnFB
            hideToggleFiltersButton
          >
            <FilterGroupItem label="Well Number">
              <Input placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Well Completion">
              <Input placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Name">
              <Input placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="API Well Number">
              <Input placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="API WC Number">
              <Input placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Type">
              <Select>
                <Option>LI</Option>
                <Option>OH</Option>
              </Select>
            </FilterGroupItem>
            <FilterGroupItem label={"State"}>
              <MultiComboBox required>
                <MultiComboBoxItem text="California" />
                <MultiComboBoxItem text="Texas" />
                <MultiComboBoxItem text="Florida" />
                <MultiComboBoxItem text="Alaska" />
                <MultiComboBoxItem text="Georgia" />
              </MultiComboBox>
            </FilterGroupItem>
            <FilterGroupItem label={"County"}>
              <MultiComboBox required>
                <MultiComboBoxItem text="USA" />
                <MultiComboBoxItem text="India" />
                <MultiComboBoxItem text="China" />
                <MultiComboBoxItem text="Japan" />
                <MultiComboBoxItem text="Iraq" />
              </MultiComboBox>
            </FilterGroupItem>
            <FilterGroupItem label={"WC Xref1"}>
              <Input />
            </FilterGroupItem>
            <FilterGroupItem label={"WC Xref2"}>
              <Input />
            </FilterGroupItem>
          </FilterBar>

          <Grid container justify="space-between" style={{ height: "90%" }}>
            <Grid item xs={12}>
              <div style={spacing.sapUiMediumMarginTop}>
                <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                  Items (123)
                </Title>

                <Table
                  columns={
                    <>
                      <TableColumn>
                        <CheckBox />
                      </TableColumn>
                      <TableColumn popinText="Well Number">
                        <Label>Well Number</Label>
                      </TableColumn>
                      <TableColumn popinText="Well Completion">
                        <Label>Well Completion</Label>
                      </TableColumn>
                      <TableColumn popinText="WC Name">
                        <Label>WC Name</Label>
                      </TableColumn>
                      <TableColumn>
                        <Label>API Well Number</Label>
                      </TableColumn>
                      <TableColumn>
                        <Label>API WC Number</Label>
                      </TableColumn>
                      <TableColumn>
                        <Label>WC Type</Label>
                      </TableColumn>
                    </>
                  }
                >
                  <TableRow>
                    <TableCell>
                      <CheckBox />
                    </TableCell>
                    <TableCell>
                      <Label>Very Best Screens</Label>
                    </TableCell>
                    <TableCell>
                      <Label>30 x 18 x 3cm</Label>
                    </TableCell>
                    <TableCell>
                      <Label>4.2KG</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CheckBox />
                    </TableCell>
                    <TableCell>
                      <Label>Very Best Screens</Label>
                    </TableCell>
                    <TableCell>
                      <Label>30 x 18 x 3cm</Label>
                    </TableCell>
                    <TableCell>
                      <Label>4.2KG</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CheckBox />
                    </TableCell>
                    <TableCell>
                      <Label>Very Best Screens</Label>
                    </TableCell>
                    <TableCell>
                      <Label>30 x 18 x 3cm</Label>
                    </TableCell>
                    <TableCell>
                      <Label>4.2KG</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CheckBox />
                    </TableCell>
                    <TableCell>
                      <Label>Very Best Screens</Label>
                    </TableCell>
                    <TableCell>
                      <Label>30 x 18 x 3cm</Label>
                    </TableCell>
                    <TableCell>
                      <Label>4.2KG</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CheckBox />
                    </TableCell>
                    <TableCell>
                      <Label>Very Best Screens</Label>
                    </TableCell>
                    <TableCell>
                      <Label>29 x 17 x 3.1cm</Label>
                    </TableCell>
                    <TableCell>
                      <Label>4.5KG</Label>
                    </TableCell>
                    <TableCell>
                      <Label>1249EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                    <TableCell>
                      <Label>956EUR</Label>
                    </TableCell>
                  </TableRow>
                </Table>
              </div>
            </Grid>
            <Grid item xs={12} style={{ alignSelf: "flex-end" }}>
              <div style={spacing.sapUiMediumMarginTop}>
                <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                  Selected Items and Conditions (1)
                </Title>
                <MultiInput
                  style={{
                    width: "100%",
                  }}
                  tokens={
                    <>
                      <Token text="Linear (WL1003)" />
                      <Token text="!=WL1009" />
                      <Token text=">WL1000" />
                      <Token text="<WL1005" />
                    </>
                  }
                  tooltip=""
                />
              </div>
            </Grid>
          </Grid>
        </Tab>
        <Tab text="Define Conditions" style={{ overflowY: "hidden" }}>
          <Grid container justify="space-between" style={{ height: "100%" }}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12} style={{ alignSelf: "flex-end" }}>
              <div style={spacing.sapUiMediumMarginTop}>
                <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                  Selected Items and Conditions (1)
                </Title>
                <MultiInput
                  style={{
                    width: "100%",
                  }}
                  tokens={
                    <>
                      <Token text="=WL1001" />
                      <Token text="!=WL1009" />
                      <Token text=">WL1000" />
                      <Token text="<WL1005" />
                    </>
                  }
                  tooltip=""
                />
              </div>
            </Grid>
          </Grid>
        </Tab>
      </TabContainer>
    </Dialog>
  );
};
