import { Grid } from "@material-ui/core";
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
  Tab,
  TabContainer,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Title,
  Token,
  Select,
  Option,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import React from "react";
import ReactDOM from "react-dom";

export const WCValueHelperDialog = (props) => {
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    props.dialogRef.current.close();
  };
  const handleGo = (event) => {
    setLoading((value) => !value);
    setTimeout(() => {
      setLoading((value) => !value);
    }, 3000);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Dialog
          ref={props.dialogRef}
          footer={
            <Bar endContent={<Button onClick={handleClose}>Close</Button>} />
          }
          header={<Bar startContent={<Title>Well Completion</Title>} />}
          headerText="Well Completion"
        >
          <TabContainer
            style={{
              height: "80vh",
              width: "900px",
            }}
          >
            <Tab selected text="Search and Select">
              <FilterBar
                // activeFiltersCount
                filterContainerWidth="13.125rem"
                showFilterConfiguration={false}
                showGoOnFB
                hideToggleFiltersButton
                onGo={handleGo}
              >
                {props.queryHelperMeta.metaData.map((field, index) => {
                  if (field.drop_down || field.isCheckbox) {
                    return (
                      <FilterGroupItem
                        label={field.label}
                        key={`${index}-field`}
                      >
                        <Select>
                          {field.selectOptions.map((option, index) => (
                            <Option key={`${index}-'option`}>{option}</Option>
                          ))}
                        </Select>
                      </FilterGroupItem>
                    );
                  } else {
                    return (
                      <FilterGroupItem
                        label={field.label}
                        key={`${index}-field`}
                      >
                        <Input />
                      </FilterGroupItem>
                    );
                  }
                })}
              </FilterBar>

              <Grid container justify="space-between" style={{ height: "90%" }}>
                <Grid item xs={12}>
                  <div style={spacing.sapUiMediumMarginTop}>
                    <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                      Items (5)
                    </Title>

                    <Table
                      busy={loading}
                      columns={
                        <>
                          <TableColumn>
                            <CheckBox />
                          </TableColumn>
                          {props.queryHelperMeta.columnHeaders.map(
                            (column, index) => (
                              <TableColumn>
                                <Label key={`${index}-'column`}>{column}</Label>
                              </TableColumn>
                            )
                          )}
                        </>
                      }
                    >
                      <TableRow>
                        <TableCell>
                          <CheckBox />
                        </TableCell>
                        <TableCell>
                          <Label>WL1001</Label>
                        </TableCell>
                        <TableCell>
                          <Label>01</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Tara Battee</Label>
                        </TableCell>
                        <TableCell>
                          <Label>ALW1001</Label>
                        </TableCell>
                        <TableCell>
                          <Label>A1</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Alabama</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Autauga County</Label>
                        </TableCell>
                        <TableCell>
                          <Label>TC Energy</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Energy Transfer</Label>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <CheckBox />
                        </TableCell>
                        <TableCell>
                          <Label>WL1002</Label>
                        </TableCell>
                        <TableCell>
                          <Label>02</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Annie Vaux</Label>
                        </TableCell>
                        <TableCell>
                          <Label>ALW1002</Label>
                        </TableCell>
                        <TableCell>
                          <Label>A2</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Alabama</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Henry County</Label>
                        </TableCell>
                        <TableCell>
                          <Label>TC Energy</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Energy Transfer</Label>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <CheckBox />
                        </TableCell>
                        <TableCell>
                          <Label>WL1003</Label>
                        </TableCell>
                        <TableCell>
                          <Label>03</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Tara Battee</Label>
                        </TableCell>
                        <TableCell>
                          <Label>ALW1003</Label>
                        </TableCell>
                        <TableCell>
                          <Label>A3</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Alaska</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Elmory County</Label>
                        </TableCell>
                        <TableCell>
                          <Label>TC Energy</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Williams Companies</Label>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <CheckBox />
                        </TableCell>
                        <TableCell>
                          <Label>WL1004</Label>
                        </TableCell>
                        <TableCell>
                          <Label>04</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Richard Connolly</Label>
                        </TableCell>
                        <TableCell>
                          <Label>ALW1004</Label>
                        </TableCell>
                        <TableCell>
                          <Label>A4</Label>
                        </TableCell>
                        <TableCell>
                          <Label>New Jersy</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Winston County</Label>
                        </TableCell>
                        <TableCell>
                          <Label>TC Energy</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Energy Transfer</Label>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <CheckBox />
                        </TableCell>
                        <TableCell>
                          <Label>WL1005</Label>
                        </TableCell>
                        <TableCell>
                          <Label>05</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Tara Battee</Label>
                        </TableCell>
                        <TableCell>
                          <Label>ALW1005</Label>
                        </TableCell>
                        <TableCell>
                          <Label>A5</Label>
                        </TableCell>
                        <TableCell>
                          <Label>North Dakota</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Monre County</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Enbridge</Label>
                        </TableCell>
                        <TableCell>
                          <Label>Energy Transfer</Label>
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
              <Grid
                container
                justify="space-between"
                style={{ height: "100%" }}
              >
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
        </Dialog>,
        document.body
      )}
    </>
  );
};
