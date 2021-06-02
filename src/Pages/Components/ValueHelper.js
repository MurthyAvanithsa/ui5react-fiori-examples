import { Dialog,
    Button,
    Bar,
    Input,
    Title,
    TabContainer,
    Table,
    TableColumn,
    TableCell,
    Label,
    TableRow,
    CheckBox,
    Tab,
    Grid, ComboBox, ComboBoxItem,MultiInput,Token,
    FilterGroupItem,
    FilterBar,
    Select,
    Option,
 } from '@ui5/webcomponents-react'
 import { AgGridReact } from "ag-grid-react";
 import { spacing } from "@ui5/webcomponents-react-base";
 import "ag-grid-community/dist/styles/ag-grid.css";
 import "ag-grid-community/dist/styles/ag-theme-balham.css";


export default function ValueHelperDialog(props) {
  
    console.log("meta", props.ValueHelperMetaData)
    const ValueHelperMetaData = props.ValueHelperMetaData['wellCompletion']
    console.log("ValueHelperMetaData12", ValueHelperMetaData )

    const handleClose = () => {
      props.dialogRef.current.close();
    };
    var columns = [{
      headerName: "WC XRef1",
      field: "wc_xref1",
      resizable: true,
    },
    {
      headerName: "WC XRef2",
      field: "wc_xref2",
      resizable: true,
    },
    {
      headerName: "Well Class",
      field: "well_class",
      resizable: true,
    }]
    
    function createColumnDefs() {
      let headerDataObj = {
        headerName: '',
        field: '',
      }
      ValueHelperMetaData.map((fieldMeta) => {
        headerDataObj['headerName'] = fieldMeta.label
        headerDataObj['field'] = fieldMeta.fieldKey
      console.log("headerDataObj", headerDataObj)
      columns.push(headerDataObj)
      }
      )}
      // createColumnDefs()
      console.log("columns", columns)

    return (
        <Dialog
            ref={props.dialogRef}
            style={{ zIndex: 9999 }}
            className=""
            footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
            header={<Bar startContent={<Title></Title>} />}
            headerText="Dialog Header">
                <TabContainer
                    className=""
                    onTabSelect={function noRefCheck() {}}
                    slot=""
                    style={{
                    height: "80vh",
                    width: "900px",
                    }}
                    tooltip="">
                        <Tab text="Search And Select">
                        <FilterBar
                          useToolbar={false}
                          filterContainerWidth="13.125rem"
                          showFilterConfiguration={false}
                       
                        >
                          {ValueHelperMetaData.map((Field, index) => {
                            if (Field.drop_down) {
                              return (                                  
                                <FilterGroupItem label={Field.label} key={`${index}-'field`}>
                                   
                                    <Select >
                                            <Option></Option>
                                        </Select>
                                </FilterGroupItem>
                              )
                            }else {
                              return (
                                  <FilterGroupItem label={Field.label} key={`${index}-field`}>
                                       <Input />
                                  </FilterGroupItem>                               
                              )
                            }                          
                            })
                          }
                        </FilterBar> 
                        <AgGridReact
                          // onGridReady={onGridReady}
                          columnDefs={columns}
                          // rowData={rowData}
                        />              
                        </Tab>
                        <Tab text= "Define Conditions">
                        <div style={{ display: "flex", marginBottom: "1em" }}>
                              <ComboBox>
                                <ComboBoxItem text="Equals" />
                                <ComboBoxItem text="Does Not Equal" />
                                <ComboBoxItem text="Greater Than" />
                                <ComboBoxItem text="Less Than" />
                              </ComboBox>
                              <Input style={{ marginLeft: "1em", width: "100%" }} />
                              <Button key="decline" design="Transparent" icon="decline" />
                              <Button key="add" design="Transparent" icon="add" />
                            </div>
                          {/* <Grid container justify="space-between" style={{ height: "100%" }}>
                          <Grid item xs={12}>
                            <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                            </Title>
                            
                          </Grid> */}
                          {/* <Grid item xs={12} style={{ alignSelf: "flex-end" }}> */}
              {/* <div style={spacing.sapUiMediumMarginTop}>
                <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
                  Selected Items and Conditions (1)
                </Title>
                <MultiInput
                  style={{
                    width: "100%",
                  }}
                  tokens={
                    <>
                     
                    </>
                  }
                  tooltip=""
                />
              </div> */}
            {/* </Grid> */}
                          {/* </Grid> */}

                        </Tab>

                </TabContainer>

        </Dialog>
    )
}