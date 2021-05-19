import {
  Bar,
  Button,
  CheckBox,
  ComboBox,
  ComboBoxItem,
  Dialog,
  FilterBar,
  FilterGroupItem,
  Icon,
  Input,
  Label,
  MultiInput,
  Tab,
  TabContainer,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Title,
  Token,
  VariantManagement,
} from "@ui5/webcomponents-react";
import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";

export const WCValueHelperDialog = (props) => {
  const handleClose = () => {
    props.dialogRef.current.close();
  };

  return (
    <Dialog
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
          height: "900px",
          width: "900px",
        }}
        tooltip=""
      >
        <Tab selected text="Search and Select">
          <FilterBar
            showGoOnFB
            filterContainerWidth="13.125rem"
            search={<Input placeholder="Search" />}
            showFilterConfiguration
            variants={
              <VariantManagement
                selectedKey="2"
                variantItems={[
                  { key: "1", label: "Variant 1" },
                  { key: "2", label: "Variant 2" },
                ]}
              />
            }
          >
            <FilterGroupItem label="Well Number">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Well Completion">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Name">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="API Well Number">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="API WC Number">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Type">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
          </FilterBar>
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
                  <TableColumn demandPopin minWidth={600} popinText="WC Name">
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
        </Tab>
        <Tab text="Define Conditions" style={{ overflowY: "hidden" }}>
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
        </Tab>
      </TabContainer>
    </Dialog>
  );
};
